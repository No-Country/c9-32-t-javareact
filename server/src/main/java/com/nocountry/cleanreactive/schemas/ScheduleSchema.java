package com.nocountry.cleanreactive.schemas;

import java.util.Date;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ScheduleSchema {
    @NotNull(message = "program date cannot be null")
    @Schema(example = "2023-01-01:12:00")
    private Date programDate;

    @NotNull(message = "direction cannot be null")
    @Schema(example = "123 Main St.")
    private String direction;

    @Schema(example = "simple | profunda")
    private String depth;

    @Schema(example = "pequeño | mediano | grande")
    private String size;

    @Schema(example = "mañana | tarde | noche")
    private String workday;

    @Schema(example = "unica | 2/Semana | 3/Semana | diario")
    private String period;

    @Schema(example = "1 | 4 | 10")
    private String rooms;

    @Schema(example = "Pendiente | Haciendo | Finalizado")
    private String status;

    private servType servType;

    private user user;

    public static class servType {
        @Schema(example = "hogar")
        private String type;

        public servType(String type) {
            this.type = type;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }
    }

    public static class user {
        @Schema(example = "test@gmail.com")
        private String email;

        public user(String email) {
            this.email = email;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }
}
