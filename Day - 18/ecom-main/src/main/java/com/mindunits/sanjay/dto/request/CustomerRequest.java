package com.mindunits.sanjay.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class CustomerRequest {
    private int cid;
    private String fullname;
    private String lastname;
    private int age;
    private String gender;
    private String phone;
    private String address;
    private String country;
    private String state;
    
}
