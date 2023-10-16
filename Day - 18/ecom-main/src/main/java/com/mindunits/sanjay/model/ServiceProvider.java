package com.mindunits.sanjay.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "_serviceprovider")
public class ServiceProvider {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id; 
	
	public ServiceProvider() {
		super();
		
	}

	@Column(length = 50, nullable = false)

    private String providername;
	

	@Column(length = 50, nullable = false)

    private String providerage;
	
	@Column(length = 50, nullable = false)

    private String providerphone;

	@Column(length = 50, nullable = false)

    private String providergender;

	@Column(length = 50, nullable = false)

    private String provideraddress;
	
	@Column(length = 50, nullable = false)

    private String providerserviceoffered;
	
	@Column(length = 50, nullable = false)

    private String providercategory;

	@Column(length = 50, nullable = false)

    private String providerdescription;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProvidername() {
		return providername;
	}

	public void setProvidername(String providername) {
		this.providername = providername;
	}

	public String getProviderage() {
		return providerage;
	}

	public void setProviderage(String providerage) {
		this.providerage = providerage;
	}

	public String getProviderphone() {
		return providerphone;
	}

	public void setProviderphone(String providerphone) {
		this.providerphone = providerphone;
	}

	public String getProvidergender() {
		return providergender;
	}

	public void setProvidergender(String providergender) {
		this.providergender = providergender;
	}

	public String getProvideraddress() {
		return provideraddress;
	}

	public void setProvideraddress(String provideraddress) {
		this.provideraddress = provideraddress;
	}

	public String getProviderserviceoffered() {
		return providerserviceoffered;
	}

	public void setProviderserviceoffered(String providerserviceoffered) {
		this.providerserviceoffered = providerserviceoffered;
	}

	public String getProvidercategory() {
		return providercategory;
	}

	public void setProvidercategory(String providercategory) {
		this.providercategory = providercategory;
	}

	public String getProviderdescription() {
		return providerdescription;
	}

	public void setProviderdescription(String providerdescription) {
		this.providerdescription = providerdescription;
	}

	public ServiceProvider(int id, String providername, String providerage,
			String providerphone, String providergender, String provideraddress, String providerserviceoffered,
			String providercategory, String providerdescription) {
		this.id = id;
		this.providername = providername;
		this.providerage = providerage;
		this.providerphone = providerphone;
		this.providergender = providergender;
		this.provideraddress = provideraddress;
		this.providerserviceoffered = providerserviceoffered;
		this.providercategory = providercategory;
		this.providerdescription = providerdescription;
	}
	

	
	
	

	
	
	
	
	
	

	
	
	
	

	
	

	
	
}
