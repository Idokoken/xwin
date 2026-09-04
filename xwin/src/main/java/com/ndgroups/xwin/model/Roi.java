package com.ndgroups.xwin.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import lombok.*;

import java.math.BigDecimal;

@Data
public class Roi {

    @JsonProperty("times")
    private BigDecimal times;

    @JsonProperty("currency")
    private String currency;

    @JsonProperty("percentage")
    private BigDecimal percentage;
}
