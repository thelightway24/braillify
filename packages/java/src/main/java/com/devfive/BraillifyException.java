package com.devfive;

public class BraillifyException extends RuntimeException {

	public BraillifyException(String message) {
		super(message);
	}

	public BraillifyException(String message, Throwable cause) {
		super(message, cause);
	}
}