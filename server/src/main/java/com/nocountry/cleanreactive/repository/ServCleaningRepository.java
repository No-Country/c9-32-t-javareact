package com.nocountry.cleanreactive.repository;

import com.nocountry.cleanreactive.model.ServCleaning;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ServCleaningRepository extends MongoRepository<ServCleaning,String> {
    @Query("{'code': ?0}")
    Optional<ServCleaning> findByCode(String code);
}

