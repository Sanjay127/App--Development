package com.mindunits.sanjay.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "_bookingcustomer")

public class BookingCustomer {
	
	@Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(length = 50, nullable = false)

	private String customerfullname;
	
	@Column(length = 50, nullable = false)

	private int customerage;
	
	@Column(length = 50, nullable = false)

	private String customergender;
	
	@Column(length = 50, nullable = false)

	private String customeremail;
	
	@Column(length = 50, nullable = false)

	private String customerphone;
	
	@Column(length = 50, nullable = false)

	private String customeraddress;
	
	@Column(length = 50, nullable = false)

	private String service;
	
	@Column(length = 50, nullable = false)

	private String customercountry;
	
	@Column(length = 50, nullable = false)

	private String customerstate;

	@Column(length = 10, nullable = false)

	private Date date;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCustomerfullname() {
		return customerfullname;
	}

	public void setCustomerfullname(String customerfullname) {
		this.customerfullname = customerfullname;
	}

	public int getCustomerage() {
		return customerage;
	}

	public void setCustomerage(int customerage) {
		this.customerage = customerage;
	}

	public String getCustomergender() {
		return customergender;
	}

	public void setCustomergender(String customergender) {
		this.customergender = customergender;
	}

	public String getCustomeremail() {
		return customeremail;
	}

	public void setCustomeremail(String customeremail) {
		this.customeremail = customeremail;
	}

	public String getCustomerphone() {
		return customerphone;
	}

	public void setCustomerphone(String customerphone) {
		this.customerphone = customerphone;
	}

	public String getCustomeraddress() {
		return customeraddress;
	}

	public void setCustomeraddress(String customeraddress) {
		this.customeraddress = customeraddress;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getCustomercountry() {
		return customercountry;
	}

	public void setCustomercountry(String customercountry) {
		this.customercountry = customercountry;
	}

	public String getCustomerstate() {
		return customerstate;
	}

	public void setCustomerstate(String customerstate) {
		this.customerstate = customerstate;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public BookingCustomer(int id, String customerfullname, int customerage, String customergender,
			String customeremail, String customerphone, String customeraddress, String service, String customercountry,
			String customerstate, Date date) {
		this.id = id;
		this.customerfullname = customerfullname;
		this.customerage = customerage;
		this.customergender = customergender;
		this.customeremail = customeremail;
		this.customerphone = customerphone;
		this.customeraddress = customeraddress;
		this.service = service;
		this.customercountry = customercountry;
		this.customerstate = customerstate;
		this.date = date;
	}


	public BookingCustomer()
	{
		super();
	}
	
	
	
	
	
}
