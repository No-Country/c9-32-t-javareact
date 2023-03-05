package com.nocountry.cleanreactive.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.nocountry.cleanreactive.model.ServType;

@Repository
public interface ServTypeRepository extends MongoRepository<ServType, String> {
    @Query("{'type': ?0}")
    Optional<ServType> findByType(String type);
}
