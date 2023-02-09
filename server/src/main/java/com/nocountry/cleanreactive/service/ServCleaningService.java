package com.nocountry.cleanreactive.service;

import com.nocountry.cleanreactive.exceptions.CleanCollectionException;
import com.nocountry.cleanreactive.model.ServCleaning;
import jakarta.validation.ConstraintViolationException;

import java.util.List;

public interface ServCleaningService {
    public void createServCleaning(ServCleaning servCleaning) throws ConstraintViolationException, CleanCollectionException;
    public List<ServCleaning> getAllServCleaning();
    public ServCleaning findSerCleaningById(String id) throws CleanCollectionException;
    public void updateServCleaning(String id, ServCleaning servCleaning) throws CleanCollectionException;
    public void deleteServCleaning(String id) throws CleanCollectionException;


}