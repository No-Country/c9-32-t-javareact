package com.nocountry.cleanreactive.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.cleanreactive.model.ServType;
import com.nocountry.cleanreactive.service.ServTypeService;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/serv-type")
public class ServTypeController {

    private final ServTypeService typeService;

    @Operation(summary = "Get types", description = "Get types from the database avaible for users and admin", tags = {
            "Service Type" })
    @GetMapping
    public ResponseEntity<?> findAll() {
        try {
            List<ServType> types = typeService.getAllServTypes();
            return new ResponseEntity<>(types, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @Operation(summary = "Save type [ADMIN]", description = "Save type to the database", tags = { "Service Type" })
    @PostMapping
    public ResponseEntity<?> save(@RequestBody ServType type) {
        try {
            ServType servType = typeService.createServType(type);
            return new ResponseEntity<>(servType, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "Update type [ADMIN]", description = "Update type from the database", tags = {
            "Service Type" })
    @PutMapping(path = "{id}")
    public ResponseEntity<?> update(@PathVariable("id") String id, @RequestBody ServType type) {
        try {
            ServType _type = typeService.findServTypeById(id).orElseThrow();

            _type.setType(type.getType());
            _type.setDesc(type.getDesc());
            _type.setCost(type.getCost());

            typeService.updateServType(_type);
            return new ResponseEntity<>(_type, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @Operation(summary = "Delete type [ADMIN]", description = "Delete type from the database", tags = {
            "Service Type" })
    @DeleteMapping(path = "{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String id) {
        try {
            typeService.deleteServTypeById(id);
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}