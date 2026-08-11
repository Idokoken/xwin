package com.ndgroups.xwin.request;

import com.ndgroups.xwin.Enum.ORDER_TYPE;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {
    private String coinId;
    private double quantity;
    private ORDER_TYPE orderType;
}
