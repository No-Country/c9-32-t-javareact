package com.nocountry.cleanreactive.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.nocountry.cleanreactive.model.ServType;
import com.nocountry.cleanreactive.repository.ServTypeRepository;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@AllArgsConstructor
public class TypeInitializer implements CommandLineRunner {

        private final ServTypeRepository servTypeRepository;

        @Override
        public void run(String... args) throws Exception {
                if (servTypeRepository.findAll().isEmpty()) {
                        log.info("Inserting initial data...");
                        List<ServType> servTypes = new ArrayList<>();
                        ServType servType1 = ServType.builder().type("hogar")
                                        .desc("Limpieza de salas, habitaciones y cocinas")
                                        .cost(40000).build();
                        ServType servType2 = ServType.builder().type("oficina")
                                        .desc("Limpieza de cubiculos y espacios de trabajos").cost(60000)
                                        .build();
                        // ServType servType3 = ServType.builder().type("construccion")
                        // .desc("Limpieza de escombros y restos de construccion").cost(20000)
                        // .build();
                        // ServType servType4 = ServType.builder().type("jardineria")
                        // .desc("Podado y mantenimiento de tu jardin")
                        // .cost(80000).build();
                        // ServType servType5 = ServType.builder().type("alfombras")
                        // .desc("Limpieza exhaustiva de alfombras")
                        // .cost(80000).build();
                        // ServType servType6 = ServType.builder().type("ventanas")
                        // .desc("Limpieza interior y exterior de ventanas")
                        // .cost(80000).build();
                        ServType servType7 = ServType.builder().type("vehiculo")
                                        .desc("Limpieza interior y exterior de tu vehiculo")
                                        .cost(30000).build();
                        // ServType servType8 = ServType.builder().type("telas")
                        // .desc("Limpieza de telas, asientos, muebles y pieles")
                        // .cost(80000).build();
                        servTypes.add(servType1);
                        servTypes.add(servType2);
                        // servTypes.add(servType3);
                        // servTypes.add(servType4);
                        // servTypes.add(servType5);
                        // servTypes.add(servType6);
                        servTypes.add(servType7);
                        // servTypes.add(servType8);

                        servTypeRepository.saveAll(servTypes);
                } else {
                        log.info("Initial data already exists. Skipping data initialization.");
                }
        }
}