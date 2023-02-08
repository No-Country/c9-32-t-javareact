package com.nocountry.cleanreactive.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.cleanreactive.model.Usuario;

@Repository
public interface UsuarioRepository extends MongoRepository<Usuario, String> {

}
