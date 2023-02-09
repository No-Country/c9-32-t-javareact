package com.nocountry.cleanreactive.model;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "service_cleaning")
public class ServCleaning {
    @Id
    private String id;

    @NotNull(message = "type service cannot be null")
    private String typeServ;
    @NotNull(message = "direction cannot be null")
    private String code;
    //@NotNull(message = "program date  cannot be null")
    private Date programDate;
    @NotNull(message = "direction cannot be null")
    private String direction;
    @NotNull(message = "cost cannot be null")
    private double cost;
    @NotNull(message = "status cannot be null")
    private String status;

}