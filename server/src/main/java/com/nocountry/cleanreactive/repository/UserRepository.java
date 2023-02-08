package com.nocountry.cleanreactive.repository;

import com.nocountry.cleanreactive.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
