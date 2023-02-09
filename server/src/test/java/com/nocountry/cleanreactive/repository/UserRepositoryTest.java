package com.nocountry.cleanreactive.repository;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.nocountry.cleanreactive.model.User;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserRepositoryTest {

    private String email;
    private User user;

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    void CreateUser() {
        this.email = "test@gmail.com";
        this.user = new User("test", "test", this.email, "test", "test");
        this.user.setId(ObjectId.get().toHexString());
    }

    @AfterEach
    void tearDown() {
        userRepository.deleteAll();
    }

    @Test
    void whenPostRequestUser_ThenFindByEmail() throws Exception {
        userRepository.save(this.user);

        Optional<User> userFound = userRepository.findByEmail(user.getEmail());
        assertNotNull(userFound);
    }
}
