package com.stylehub.service;

import java.util.List;

import com.stylehub.dto.AddUserRequest;
import com.stylehub.dto.UserLoginRequest;
import com.stylehub.model.User;

public interface UserService {
	
	User registerUser(AddUserRequest userRequest);

    void deleteUserById(int userId);

    User loginUser(UserLoginRequest loginRequest);

    List<User> getAllUsers();

    List<User> getAllDeliveryPersons();

}
