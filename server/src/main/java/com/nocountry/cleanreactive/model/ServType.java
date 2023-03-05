package com.nocountry.cleanreactive.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Document(collection = "service_type")
public class ServType {
    @Id
    private String id;

    @NotNull(message = "type service cannot be null")
    @Schema(example = "hogar")
    private String type;

    @NotNull(message = "desc service cannot be null")
    @Schema(example = "Limpieza de habitaciones, cocina, etc")
    private String desc;

    @NotNull(message = "cost cannot be null")
    @Schema(example = "40000")
    private Integer cost;
}