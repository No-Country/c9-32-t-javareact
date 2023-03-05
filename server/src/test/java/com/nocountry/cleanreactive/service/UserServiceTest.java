// package com.nocountry.cleanreactive.service;

// import static org.junit.jupiter.api.Assertions.assertEquals;
// import static org.junit.jupiter.api.Assertions.assertNotNull;
// import static org.junit.jupiter.api.Assertions.assertNull;
// import static org.junit.jupiter.api.Assertions.assertTrue;

// import org.bson.types.ObjectId;
// import org.junit.jupiter.api.AfterEach;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import
// org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
// import org.springframework.boot.test.context.SpringBootTest;

// import com.nocountry.cleanreactive.model.User;
// import com.nocountry.cleanreactive.repository.UserRepository;

// import java.util.List;
// import java.util.Optional;

// @SpringBootTest
// @AutoConfigureMockMvc
// public class UserServiceTest {

// private User user;

// private String email = "test@gmail.com";
// private String name = "test";
// private String address = "Street-2 #11";
// private String phone = "098-4345123";
// private String role = "user";

// @Autowired
// private UserRepository userRepository;

// @Autowired
// private UserService userService;

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
// void whenSaveUserWithSameEmail_thenCatchException() throws Exception {
// try {
// userService.save(this.user);
// User user2 =
// User.builder().name(name).address(address).phoneNumber(phone).email(email).password("123456")
// .build();
// user2.setId(ObjectId.get().toHexString());
// userService.save(user2);
// } catch (Exception e) {
// assertEquals(e.getMessage(), "Email " + this.email + " taken");
// }
// }

// @Test
// void whenSaveUser_thenReturnUser() throws Exception {
// userService.save(this.user);
// assertNotNull(this.user);
// }

// @Test
// void whenUpdateUser_thenReturnUser() throws Exception {
// userService.update(this.user);
// assertNotNull(this.user);
// }

// @Test
// void whenFindAllUsers_thenReturnUsers() throws Exception {
// userService.save(this.user);
// List<User> users = userService.findAll();

// assertNotNull(users);
// assertEquals(1, users.size());
// assertTrue(users.contains(user));
// }

// @Test
// void whenFindUserById_thenReturnUser() throws Exception {
// userService.save(this.user);
// Optional<User> userFound = userService.findById(user.getId());
// assertNotNull(userFound);
// }

// @Test
// void whenFindUserByIdNotFound_thenReturnException() throws Exception {
// try {
// userService.save(this.user);
// Optional<User> userFound = userService.findById("2");
// assertNull(userFound);
// } catch (Exception e) {
// assertEquals(e.getMessage(), "User with id 2 does not exists");
// }
// }

// @Test
// void whenDeleteUserById_thenReturnVoid() throws Exception {
// userService.save(this.user);
// assertEquals(userService.deleteById(user.getId()), 204);
// }

// @Test
// void whenDeleteUserByIdNotFound_thenReturnException() throws Exception {
// try {
// userService.save(this.user);
// userService.deleteById("2");
// } catch (Exception e) {
// assertEquals(e.getMessage(), "User with id 2 does not exists");
// }
// }
// }
