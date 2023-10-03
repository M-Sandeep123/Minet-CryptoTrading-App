package com.bc115.userservice.service;

import com.bc115.userservice.entity.User;
import com.bc115.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class CustomUserDetailsServiceTest {

    @InjectMocks
    private CustomUserDetailsService customUserDetailsService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testLoadUserByUsername() {
        String usernameOrEmail = "john@example.com";
        String password = "password";
        User user = new User(1, "John Doe", usernameOrEmail, password, 1000);

        when(userRepository.findByEmail(usernameOrEmail)).thenReturn(Optional.of(user));

        UserDetails userDetails = customUserDetailsService.loadUserByUsername(usernameOrEmail);

        assertEquals(usernameOrEmail, userDetails.getUsername());
        assertEquals(password, userDetails.getPassword());
    }

    @Test
    void testLoadUserByUsernameUserNotFound() {
        String usernameOrEmail = "nonexistent@example.com";

        when(userRepository.findByEmail(usernameOrEmail)).thenReturn(Optional.empty());

        UsernameNotFoundException exception = org.junit.jupiter.api.Assertions.assertThrows(
                UsernameNotFoundException.class,
                () -> customUserDetailsService.loadUserByUsername(usernameOrEmail)
        );

        assertEquals("User not found with username or email: " + usernameOrEmail, exception.getMessage());
    }
}
