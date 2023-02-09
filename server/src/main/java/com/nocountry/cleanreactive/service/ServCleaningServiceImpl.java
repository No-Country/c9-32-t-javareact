package com.nocountry.cleanreactive.service;

import com.nocountry.cleanreactive.exceptions.CleanCollectionException;
import com.nocountry.cleanreactive.model.ServCleaning;
import com.nocountry.cleanreactive.repository.ServCleaningRepository;
import jakarta.validation.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ServCleaningServiceImpl implements ServCleaningService{

    @Autowired
    private ServCleaningRepository servCleaningRepo;
    @Override
    public void createServCleaning(ServCleaning servCleaning) throws ConstraintViolationException,CleanCollectionException{
        Optional<ServCleaning> cleanOptional = servCleaningRepo.findByCode(servCleaning.getCode());
        if(cleanOptional.isPresent()){
            throw new CleanCollectionException(CleanCollectionException.CodeAlreadyExists());
        }else{
            servCleaning.setProgramDate(new Date(System.currentTimeMillis()));
            servCleaningRepo.save(servCleaning);
        }
        servCleaning.setProgramDate(new Date(System.currentTimeMillis()));
        servCleaningRepo.save(servCleaning);

    }

    @Override
    public List<ServCleaning> getAllServCleaning() {
        List<ServCleaning> todos = servCleaningRepo.findAll();
        if(todos.size()>0){
            return todos;
        }else{
            return new ArrayList<ServCleaning>();
        }
    }

    @Override
    public void updateServCleaning(String id, ServCleaning servCleaning) throws CleanCollectionException{

        Optional<ServCleaning> cleanWithId = servCleaningRepo.findById(id);
        Optional<ServCleaning> cleanWithSameName = servCleaningRepo.findByCode(servCleaning.getCode());

        if(cleanWithId.isPresent()){
            if(cleanWithSameName.isPresent()&& !cleanWithSameName.get().getId().equals(id)){
                throw new CleanCollectionException((CleanCollectionException.CodeAlreadyExists()));
            }

            ServCleaning servCleaningUpdate = cleanWithId.get();
            servCleaningUpdate.setCode(servCleaning.getCode());
            servCleaningUpdate.setTypeServ(servCleaning.getTypeServ());
            servCleaningUpdate.setProgramDate(new Date(System.currentTimeMillis()));
            servCleaningUpdate.setDirection(servCleaning.getDirection());
            servCleaningUpdate.setStatus(servCleaning.getStatus());
            servCleaningUpdate.setCost(servCleaning.getCost());

            servCleaningRepo.save(servCleaningUpdate);


        }else{
            throw  new CleanCollectionException(CleanCollectionException.NotFoundException(id));
        }


    }
    @Override
    public ServCleaning findSerCleaningById(String id) throws CleanCollectionException {
        Optional<ServCleaning> optionalServCleaning = servCleaningRepo.findById(id);

        if (!optionalServCleaning.isPresent()){
            throw  new CleanCollectionException(CleanCollectionException.NotFoundException(id));
        }else{
            return optionalServCleaning.get();
        }


    }

    @Override
    public void deleteServCleaning(String id)  throws CleanCollectionException {

        Optional<ServCleaning> cleaningOptional = servCleaningRepo.findById(id);

        if(!cleaningOptional.isPresent()){
            throw new CleanCollectionException(CleanCollectionException.NotFoundException(id));
        }else{
            servCleaningRepo.deleteById(id);
        }


    }


}