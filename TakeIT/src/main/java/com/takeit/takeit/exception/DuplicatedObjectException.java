package com.takeit.takeit.exception;
import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT)
public class DuplicatedObjectException extends RuntimeException {
    public DuplicatedObjectException(String object, Long id){
        super(object + " with id " + id + "duplicated object");
    }
}
