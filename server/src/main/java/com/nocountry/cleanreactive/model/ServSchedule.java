package com.nocountry.cleanreactive.model;

import java.time.LocalTime;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Document(collection = "service_schedule")
public class ServSchedule {
    @Id
    private String id;

    @NotNull(message = "program date cannot be null")
    @Schema(example = "2023-01-01:12:00")
    private Date programDate;

    @NotNull(message = "direction cannot be null")
    @Schema(example = "123 Main St.")
    private String direction;

    @Schema(example = "Simple | Profunda")
    private String depth;

    @Schema(example = "Pequeño | Mediano | Grande")
    private String size;

    @Schema(example = "Mañana | Tarde | Noche")
    private String workday;

    @Schema(example = "Unica | 2/Semana | 3/Semana | Diario")
    private String period;

    @Schema(example = "# Horas")
    private LocalTime time;

    @Schema(example = "# Cuartos")
    private String rooms;

    @Schema(example = "Moto | Carro | Camioneta")
    private String typeVeh;

    @Schema(example = "Pendiente | Haciendo | Finalizado")
    private String status;

    @Schema(example = "20000")
    private Integer totalCost;

    @DBRef
    private ServType servType;
    @DBRef
    private User user;
}