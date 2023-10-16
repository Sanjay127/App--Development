package com.mindunits.sanjay.service;

import java.util.List;

import com.mindunits.sanjay.dto.request.UserRequest;
import com.mindunits.sanjay.dto.response.UserResponse;

public interface BookingCustomerService {
	
	List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);


}
