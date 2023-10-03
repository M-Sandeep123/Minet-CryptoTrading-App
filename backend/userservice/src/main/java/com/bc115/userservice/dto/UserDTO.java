package com.bc115.userservice.dto;

import com.bc115.userservice.entity.User;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private int id;
    private String fullName;
    private String email;
    private String password;
    private long balance;

    @Autowired
    public static ModelMapper modelMapper;

    static{
        modelMapper=new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
    }
    public static UserDTO mapToDTO(User user) {
        return modelMapper.map(user, UserDTO.class);
    }

    public static List<UserDTO> mapToDTOList(List<User> userList) {
        return userList.stream()
                .map(user -> mapToDTO(user))
                .collect(Collectors.toList());
    }

    public static  User mapToEntity(UserDTO userDTO) {
        return modelMapper.map(userDTO, User.class);
    }
}
