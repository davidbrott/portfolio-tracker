package com.brott.portfoliotracker.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler
  public ResponseEntity<ErrorResponse> handleException(AccountNotFoundException exc) {
    ErrorResponse error = new ErrorResponse(
        HttpStatus.NOT_FOUND.value(),
        exc.getMessage(),
        System.currentTimeMillis());

    return new ResponseEntity<ErrorResponse>(
        error,
        HttpStatus.NOT_FOUND);
  }
}
