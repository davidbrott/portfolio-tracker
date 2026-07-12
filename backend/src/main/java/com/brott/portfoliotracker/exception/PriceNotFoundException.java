package com.brott.portfoliotracker.exception;

public class PriceNotFoundException extends RuntimeException {

  public PriceNotFoundException(String message) {
    super(message);
  }

  public PriceNotFoundException(String message, Throwable cause) {
    super(message, cause);
  }

  public PriceNotFoundException(Throwable cause) {
    super(cause);
  }
}
