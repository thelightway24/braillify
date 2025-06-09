use braillify;
use pyo3::exceptions::PyValueError;
use pyo3::prelude::*;

#[pyfunction]
fn encode(text: &str) -> PyResult<Vec<u8>> {
    braillify::encode(text).map_err(|e| PyErr::new::<PyValueError, _>(e))
}

/// A Python module implemented in Rust.
#[pymodule]
fn python(m: &Bound<'_, PyModule>) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(encode, m)?)?;
    Ok(())
}
