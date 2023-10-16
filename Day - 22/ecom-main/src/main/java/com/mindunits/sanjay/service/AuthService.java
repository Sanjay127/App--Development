package com.mindunits.sanjay.service;

import com.mindunits.sanjay.dto.request.AuthenticationRequest;
import com.mindunits.sanjay.dto.request.RegisterRequest;
import com.mindunits.sanjay.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
