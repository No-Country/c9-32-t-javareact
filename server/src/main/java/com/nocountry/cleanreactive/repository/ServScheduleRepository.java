package com.nocountry.cleanreactive.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.nocountry.cleanreactive.model.ServSchedule;

@Repository
public interface ServScheduleRepository extends MongoRepository<ServSchedule, String> {
    @Query("{'direction': ?0}")
    List<ServSchedule> findByDirection(String direction);

    @Query("{'user.id': ?0}")
    List<ServSchedule> findAllByUserId(String id);
}
