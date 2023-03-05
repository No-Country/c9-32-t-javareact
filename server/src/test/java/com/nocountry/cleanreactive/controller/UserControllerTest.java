// package com.nocountry.cleanreactive.controller;

// import org.bson.types.ObjectId;
// import org.junit.jupiter.api.AfterEach;
// import org.junit.jupiter.api.Test;

// import org.springframework.beans.factory.annotation.Autowired;
// import
// org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.http.MediaType;
// import org.springframework.test.web.servlet.MockMvc;
// import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
// import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
// import com.fasterxml.jackson.databind.ObjectMapper;

// import com.nocountry.cleanreactive.model.User;
// import com.nocountry.cleanreactive.repository.UserRepository;

// @SpringBootTest
// @AutoConfigureMockMvc
// public class UserControllerTest {

// @Autowired
// MockMvc mockMvc;

// @Autowired
// UserRepository userRepository;

// @AfterEach
// void tearDown() {
// userRepository.deleteAll();
// }

// // private String email = "test@gmail.com";
// // private String name = "test";
// // private String address = "Street-2 #11";
// // private String phone = "098-4345123";
// // private String role = "USER";

// // @Test
// // void whenPostRequestUser_ThenReturn201() throws Exception {
// // User user =
// //
// //
// User.builder().name(name).address(address).phoneNumber(phone).email(email).password("123456")
// // .role(role)
// // .build();
// // user.setId(ObjectId.get().toHexString());

// // mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/users")
// // .contentType(MediaType.APPLICATION_JSON)
// // .content(new ObjectMapper().writeValueAsString(user)))
// // .andExpect(MockMvcResultMatchers.status().isCreated());
// // }

// // @Test
// // void whenGetRequestUsers_ThenReturn404() throws Exception {
// // mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/users")
// //
// .contentType(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isNotFound())
// //
// .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON));
// // }
// }
