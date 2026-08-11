package com.ndgroups.xwin.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponseDto<T> {
    private boolean success;
    private int statusCode;
    private T data;
    private String message;
    private LocalDateTime timestamp;

    public ApiResponseDto(boolean success, int statusCode, T data, String message) {
        this.success = success;
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.timestamp = LocalDateTime.now();
    }


}
