import org.gradle.api.GradleException
import org.gradle.api.file.DuplicatesStrategy
import org.gradle.api.tasks.bundling.Jar

plugins {
    id("java")
    application
}

data class NativeConfig(
    val rustTarget: String,
    val nativeLibName: String,
    val nativePath: String
)

val osName = System.getProperty("os.name").lowercase()
val osArch = System.getProperty("os.arch").lowercase()

val nativeConfig: NativeConfig = when {
    osName.contains("win") -> NativeConfig(
        rustTarget = "x86_64-pc-windows-msvc",
        nativeLibName = "braillify_java.dll",
        nativePath = "windows-x86_64"
    )

    osName.contains("nix") || osName.contains("nux") -> NativeConfig(
        rustTarget = "x86_64-unknown-linux-gnu",
        nativeLibName = "libbraillify_java.so",
        nativePath = "linux-x86_64"
    )

    osName.contains("mac") && osArch == "aarch64" -> NativeConfig(
        rustTarget = "aarch64-apple-darwin",
        nativeLibName = "libbraillify_java.dylib",
        nativePath = "darwin-aarch64"
    )

    osName.contains("mac") -> NativeConfig(
        rustTarget = "x86_64-apple-darwin",
        nativeLibName = "libbraillify.dylib",
        nativePath = "darwin-x86_64"
    )

    else -> throw GradleException("Unsupported OS for cargo build: $osName ($osArch)")
}

group = "com.devfive"
version = project.findProperty("releaseVersion") ?: "1.0.11"

application {
    mainClass.set("com.devfive.Braillify")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.scijava:native-lib-loader:2.5.0")
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
}

tasks.test {
    useJUnitPlatform()
}

tasks.withType<Jar> {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
}

tasks.register<Jar>("deployJar") {
    archiveBaseName.set(project.name)

    manifest {
        attributes["Main-Class"] = "com.devfive.Braillify"
    }

    from(sourceSets.main.get().output)
    from(configurations.runtimeClasspath.get().map {
        if (it.isDirectory) it else zipTree(it)
    })
}

tasks.jar {
    manifest {
        attributes["Main-Class"] = "com.devfive.Braillify"
    }

    from(sourceSets.main.get().output)
    from(configurations.runtimeClasspath.get().map {
        if (it.isDirectory) it else zipTree(it)
    })
}


val rustProjectDir = file("src/main/java/com/devfive")

tasks.register<Exec>("cargoBuild") {
    workingDir(rustProjectDir)
    commandLine(
        "cargo",
        "build",
        "--release",
        "--target",
        nativeConfig.rustTarget
    )
}

tasks.register<Copy>("copyNativeLib") {
    dependsOn("cargoBuild")
    from(
        "$rustProjectDir/target/${nativeConfig.rustTarget}/release/${nativeConfig.nativeLibName}"
    )
    into("src/main/resources/natives/${nativeConfig.nativePath}")
}

tasks.named("processResources") {
    dependsOn("copyNativeLib")
}
