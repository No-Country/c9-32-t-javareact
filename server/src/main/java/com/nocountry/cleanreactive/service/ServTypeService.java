package com.nocountry.cleanreactive.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nocountry.cleanreactive.exceptions.BadRequestException;
import com.nocountry.cleanreactive.exceptions.NotFoundException;
import com.nocountry.cleanreactive.model.ServType;
import com.nocountry.cleanreactive.repository.ServTypeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ServTypeService {
    private final ServTypeRepository servTypeRepo;

    public ServType createServType(ServType servType) {
        Optional<ServType> type = servTypeRepo.findByType(servType.getType());
        if (type.isPresent()) {
            throw new BadRequestException("Duplicated Type");
        }

        return servTypeRepo.save(servType);
    }

    public List<ServType> getAllServTypes() {
        List<ServType> types = servTypeRepo.findAll();
        if (types.size() <= 0) {
            throw new BadRequestException("Types are empty");
        }
        return types;
    }

    public ServType updateServType(ServType type) {
        return servTypeRepo.save(type);
    }

    public Optional<ServType> findServTypeById(String id) {
        if (!servTypeRepo.existsById(id)) {
            throw new NotFoundException("Type with id " + id + " does not exists");
        }
        return servTypeRepo.findById(id);
    }

    public Integer deleteServTypeById(String id) {
        if (!servTypeRepo.existsById(id)) {
            throw new NotFoundException("Type with id " + id + " does not exists");
        }
        servTypeRepo.deleteById(id);
        return HttpStatus.NO_CONTENT.value();
    }

}