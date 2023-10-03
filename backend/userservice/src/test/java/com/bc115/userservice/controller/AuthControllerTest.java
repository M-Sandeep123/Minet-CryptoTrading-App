package com.bc115.userservice.controller;


import com.bc115.userservice.dto.UserDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AuthControllerTest {

    @InjectMocks
    private AuthController authController;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAuthenticateUser_Success() {
        UserDTO loginDto = new UserDTO();
        loginDto.setEmail("john@example.com");
        loginDto.setPassword("password");

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                loginDto.getEmail(), loginDto.getPassword());
        Authentication authentication = mock(Authentication.class);
        when(authenticationManager.authenticate(authenticationToken)).thenReturn(authentication);

        ResponseEntity<Object> responseEntity = authController.authenticateUser(loginDto);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("User signed-in successfully!.", responseEntity.getBody());

        Authentication resultAuthentication = SecurityContextHolder.getContext().getAuthentication();
        assertNotNull(resultAuthentication);
        assertEquals(authentication, resultAuthentication);
    }

    @Test
    void testAuthenticateUser_Failure() {

        UserDTO loginDto = new UserDTO();
        loginDto.setEmail("john@example.com");
        loginDto.setPassword("invalid_password");

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                loginDto.getEmail(), loginDto.getPassword());
        RuntimeException exceptionToThrow = new RuntimeException("Authentication failed");
        when(authenticationManager.authenticate(authenticationToken)).thenThrow(exceptionToThrow);

        try {
            when(authenticationManager.authenticate(authenticationToken)).thenThrow(new RuntimeException("Authentication failed"));

            ResponseEntity<Object> responseEntity = authController.authenticateUser(loginDto);

            assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
            assertNull(SecurityContextHolder.getContext().getAuthentication());
        } catch (RuntimeException e) {

            assertEquals(exceptionToThrow.getMessage(), e.getMessage());
        }
    }
}
