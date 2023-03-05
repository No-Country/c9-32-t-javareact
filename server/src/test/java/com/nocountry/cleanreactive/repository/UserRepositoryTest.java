// package com.nocountry.cleanreactive.repository;

// import static org.junit.jupiter.api.Assertions.assertNotNull;

// import java.util.Optional;

// import org.bson.types.ObjectId;
// import org.junit.jupiter.api.AfterEach;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import
// org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
// import org.springframework.boot.test.context.SpringBootTest;

// import com.nocountry.cleanreactive.model.User;

// @SpringBootTest
// @AutoConfigureMockMvc
// public class UserRepositoryTest {

// private String email = "test@gmail.com";
// private String name = "test";
// private String address = "Street-2 #11";
// private String phone = "098-4345123";
// private String role = "USER";
// private User user;

// @Autowired
// private UserRepository userRepository;

// @BeforeEach
// void CreateUser() {
// user =
// User.builder().name(name).address(address).phoneNumber(phone).email(email).password("123456").role(role)
// .build();
// user.setId(ObjectId.get().toHexString());
// }

// @AfterEach
// void tearDown() {
// userRepository.deleteAll();
// }

// @Test
// void whenPostRequestUser_ThenFindByEmail() throws Exception {
// userRepository.save(user);

// Optional<User> userFound = userRepository.findByEmail(user.getEmail());
// assertNotNull(userFound);
// }
// }
