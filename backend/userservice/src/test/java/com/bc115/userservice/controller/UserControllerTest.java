package com.bc115.userservice.controller;
import com.bc115.userservice.dto.UserDTO;
import com.bc115.userservice.exception.UserException;
import com.bc115.userservice.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    private MockMvc mockMvc;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    @Test
    void testGetAllUsers() throws Exception {
        UserDTO user1 = new UserDTO(1, "John Doe", "john@example.com", "password", 1000);
        UserDTO user2 = new UserDTO(2, "Jane Smith", "jane@example.com", "password123", 2000);
        List<UserDTO> userList = Arrays.asList(user1, user2);

        when(userService.getAllUsers()).thenReturn(userList);

        mockMvc.perform(MockMvcRequestBuilders.get("/users"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].fullName").value("John Doe"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].id").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].fullName").value("Jane Smith"));
    }

    @Test
    void testCreateUser() throws Exception {
        UserDTO userDTO = new UserDTO(1, "John Doe", "john@example.com", "password", 1000);
        when(userService.createUser(any(UserDTO.class))).thenReturn(userDTO);

        mockMvc.perform(MockMvcRequestBuilders.post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"fullName\": \"John Doe\", \"email\": \"john@example.com\", \"password\": \"password\", \"balance\": 1000 }"))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.fullName").value("John Doe"));
    }
    @Test
    void testUpdateUserPassword() throws Exception {
        UserDTO userDTO = new UserDTO(1, "John Doe", "john@example.com", "newpassword", 1000);
        when(userService.updateUserPassword(any(UserDTO.class))).thenReturn(userDTO);

        mockMvc.perform(MockMvcRequestBuilders.patch("/users/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"id\": 1, \"password\": \"newpassword\" }"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.password").value("newpassword"));
    }

    @Test
    void testCreateUserUserExists() throws Exception {
        UserDTO userDTO = new UserDTO(1, "John Doe", "john@example.com", "password", 1000);

        when(userService.createUser(any(UserDTO.class))).thenThrow(UserException.class);

        mockMvc.perform(MockMvcRequestBuilders.post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"fullName\": \"John Doe\", \"email\": \"john@example.com\", \"password\": \"password\", \"balance\": 1000 }"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }
    @Test
    void testUpdateUserPasswordUserNotFound() throws Exception {
        when(userService.updateUserPassword(any(UserDTO.class))).thenThrow(UserException.class);

        mockMvc.perform(MockMvcRequestBuilders.patch("/users/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"id\": 1, \"password\": \"newpassword\" }"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    @Test
    void testUpdateBalance() throws Exception {
        UserDTO userDTO = new UserDTO(1, "John Doe", "john@example.com", "password", 2000);
        when(userService.updateUserBalance(any(UserDTO.class))).thenReturn(userDTO);

        mockMvc.perform(MockMvcRequestBuilders.put("/users/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"id\": 1, \"balance\": 2000 }"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.balance").value(2000));
    }

    @Test
    void testUpdateBalanceUserNotFound() throws Exception {
        when(userService.updateUserBalance(any(UserDTO.class))).thenThrow(UserException.class);

        mockMvc.perform(MockMvcRequestBuilders.put("/users/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"id\": 1, \"balance\": 2000 }"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    void testGetUserByEmail() throws Exception {
        UserDTO userDTO = new UserDTO(1, "John Doe", "john@example.com", "password", 1000);
        when(userService.getUserByEmail(anyString())).thenReturn(userDTO);

        mockMvc.perform(MockMvcRequestBuilders.get("/users/john@example.com"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.fullName").value("John Doe"));
    }

    @Test
    void testUserNotFoundByEmail() throws Exception {
        when(userService.getUserByEmail(anyString())).thenThrow(UserException.class);

        mockMvc.perform(MockMvcRequestBuilders.get("/users/nonexistent@example.com"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }
}
