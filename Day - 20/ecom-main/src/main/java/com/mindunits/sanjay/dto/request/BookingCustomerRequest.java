package com.mindunits.sanjay.dto.request;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class BookingCustomerRequest {
	private String customerfullname;
	private int customerage;
	private String customergender;
	private String customeremail;
	private String customerphone;
	private String customeraddress;
	private String service;
	private String customercountry;
	private String customerstate;
	private Date date;

}
