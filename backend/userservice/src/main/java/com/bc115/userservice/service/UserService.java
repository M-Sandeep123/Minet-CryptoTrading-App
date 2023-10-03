package com.bc115.userservice.service;

import com.bc115.userservice.dto.UserDTO;

import java.util.List;

public interface UserService {
    List<UserDTO> getAllUsers();

    UserDTO getUserByEmail(String email);

    UserDTO createUser(UserDTO userDTO);

    UserDTO updateUserPassword(UserDTO userDTO);

    UserDTO updateUserBalance(UserDTO userDTO);

}
