package com.bc115.userservice.service;

import com.bc115.userservice.dto.UserDTO;
import com.bc115.userservice.entity.User;
import com.bc115.userservice.exception.UserException;
import com.bc115.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceImplTest {

    @InjectMocks
    private UserServiceImpl userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllUsers() {
        User user1 = new User(1, "John Doe", "john@example.com", "password", 1000);
        User user2 = new User(2, "Jane Smith", "jane@example.com", "password123", 2000);
        when(userRepository.findAll()).thenReturn(Arrays.asList(user1, user2));

        List<UserDTO> userDTOs = userService.getAllUsers();

        assertEquals(2, userDTOs.size());
        assertEquals("John Doe", userDTOs.get(0).getFullName());
        assertEquals("Jane Smith", userDTOs.get(1).getFullName());
    }

    @Test
    void testCreateUser() {
        UserDTO userDTO = new UserDTO(1, "John Doe", "john@example.com", "password", 1000);
        User user = UserDTO.mapToEntity(userDTO);

        when(userRepository.findByEmail(userDTO.getEmail())).thenReturn(Optional.empty()); // Mock to simulate email not found
        when(userRepository.save(any(User.class))).thenReturn(user); // Mock the repository save method

        UserDTO createdUserDTO = userService.createUser(userDTO);

        assertEquals(userDTO.getId(), createdUserDTO.getId());
        assertEquals(userDTO.getFullName(), createdUserDTO.getFullName());
        assertEquals(userDTO.getEmail(), createdUserDTO.getEmail()); // Assert email field
        assertEquals(userDTO.getBalance(), createdUserDTO.getBalance());
    }

    @Test
    void testCreateUserEmailAlreadyExists() {

        UserDTO userDTO = new UserDTO(1, "John Doe", "john@example.com", "password", 1000);
        User existingUser = UserDTO.mapToEntity(userDTO);

        when(userRepository.findByEmail(userDTO.getEmail())).thenReturn(Optional.of(existingUser)); // Email already exists

        assertThrows(UserException.class, () -> userService.createUser(userDTO));
    }



    @Test
    void testUpdateUserPasswordUserNotFound() {
        int userId = 1;
        UserDTO userDTO = new UserDTO(userId, "John Doe", "john@example.com", "newpassword", 1000);
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> userService.updateUserPassword(userDTO));
    }
    @Test
    void testUpdateUserPassword() {
        int userId = 1;
        String newPassword = "newpassword";
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedNewPassword = passwordEncoder.encode(newPassword);
        UserDTO userDTO = new UserDTO(userId, "John Doe", "john@example.com", newPassword, 1000);
        User user = new User(userId, "John Doe", "john@example.com", "password", 1000);
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userRepository.save(user)).thenReturn(Mockito.any(User.class));
        UserDTO updatedUserDTO = userService.updateUserPassword(userDTO);

        assertTrue(passwordEncoder.matches(newPassword, updatedUserDTO.getPassword()));
        verify(userRepository, times(1)).findById(userId);
        assertNotEquals(hashedNewPassword, updatedUserDTO.getPassword());
    }

    @Test
    void testUpdateUserNewPassword() {
        int userId = 1;
        String newPassword = "password";
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedNewPassword = passwordEncoder.encode(newPassword);

        UserDTO userDTO = new UserDTO(userId, "John Doe", "john@example.com",hashedNewPassword, 1000);
        User user = new User(userId, "John Doe", "john@example.com", hashedNewPassword, 1000);
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        UserDTO updatedUserDTO = userService.updateUserPassword(userDTO);
        assertFalse(passwordEncoder.matches(newPassword, updatedUserDTO.getPassword()));
    }
    @Test
    void testUpdateUserBalance() {
        int userId = 1;
        UserDTO userDTO = new UserDTO(userId, "John Doe", "john@example.com", "password", 2000);
        User user = new User(userId, "John Doe", "john@example.com", "password", 1000);
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userRepository.save(user)).thenReturn(user);

        UserDTO updatedUserDTO = userService.updateUserBalance(userDTO);

        assertEquals(userDTO.getBalance(), updatedUserDTO.getBalance());
    }

    @Test
    void testUpdateUserBalanceUserNotFound() {
        int userId = 1;
        UserDTO userDTO = new UserDTO(userId, "John Doe", "john@example.com", "password", 2000);
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> userService.updateUserBalance(userDTO));
    }

    @Test
    void testGetUserByEmail() {

        String email = "john@example.com";
        User user = new User(1, "John Doe", email, "password", 1000);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));

        UserDTO userDTO = userService.getUserByEmail(email);

        assertNotNull(userDTO);
        assertEquals(user.getId(), userDTO.getId());
        assertEquals(user.getFullName(), userDTO.getFullName());
        assertEquals(user.getEmail(), userDTO.getEmail());
        assertEquals(user.getPassword(), userDTO.getPassword());
        assertEquals(user.getBalance(), userDTO.getBalance());
    }

    @Test
    void testGetUserByEmailNotFound() {

        String email = "nonexistent@example.com";
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        assertThrows(UserException.class, () -> userService.getUserByEmail(email));
    }

}
