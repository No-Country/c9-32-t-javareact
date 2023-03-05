package com.nocountry.cleanreactive.responses;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ServScheduleResponse {
    private String id;
    private Date programDate;
    private String direction;
    private String size;
    private String depth;
    private String period;
    private String workday;
    private Integer totalCost;
    private String status;
    private String typeId;
    private String userId;
}
