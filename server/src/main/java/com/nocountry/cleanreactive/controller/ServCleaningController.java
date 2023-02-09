package com.nocountry.cleanreactive.controller;

import com.nocountry.cleanreactive.exceptions.CleanCollectionException;
import com.nocountry.cleanreactive.model.ServCleaning;
import com.nocountry.cleanreactive.service.ServCleaningService;
import jakarta.validation.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1")
public class ServCleaningController {
    @Autowired
    private ServCleaningService cleanService;

    @GetMapping("/serv-cleaning")
    public ResponseEntity<?> getAllServCleaning(){
        List<ServCleaning> cleans = cleanService.getAllServCleaning();
        return new ResponseEntity<>(cleans, cleans.size()>0? HttpStatus.OK:HttpStatus.NOT_FOUND);
    }
    @PostMapping("/serv-cleaning")
    public ResponseEntity<?> createServCleaning(@RequestBody ServCleaning cleans){
        try {
            cleanService.createServCleaning(cleans);
            return new ResponseEntity<ServCleaning>(cleans,HttpStatus.OK);
        }catch (ConstraintViolationException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.UNPROCESSABLE_ENTITY);

        }catch (CleanCollectionException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/serv-cleaning/{id}")
    public ResponseEntity<?> findSerCleaningById(@PathVariable("id") String id){
        try {
            return new ResponseEntity<>(cleanService.findSerCleaningById(id),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/serv-cleaning/{id}")
    public ResponseEntity<?> updateServCleaningById(@PathVariable("id") String id, @RequestBody ServCleaning cleaning ){
        try {
            cleanService.updateServCleaning(id,cleaning);
            return new ResponseEntity<>("Update service cleaning with id "+id,HttpStatus.OK);
        }catch (ConstraintViolationException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.UNPROCESSABLE_ENTITY);
        }catch (CleanCollectionException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/serv-cleaning/{id}")
    public ResponseEntity<?> deleteServCleaningById(@PathVariable("id") String id){
        try {
            cleanService.deleteServCleaning(id);
            return new ResponseEntity<>("Successfully deleted with id"+id, HttpStatus.OK);

        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }




}