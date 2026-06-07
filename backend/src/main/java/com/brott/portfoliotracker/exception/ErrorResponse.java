package com.brott.portfoliotracker.exception;

public record ErrorResponse(int status,
                            String message,
                            long timeStamp) {

}
