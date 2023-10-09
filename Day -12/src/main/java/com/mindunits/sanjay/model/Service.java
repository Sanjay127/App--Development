package com.mindunits.sanjay.model;





import jakarta.persistence.Column;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

import jakarta.persistence.Table;



@Entity

@Table(name = "_service")

public class Service {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;



    public Service(Long id, String service_name, String service_description, String service_type, String service_owner,
			String service_status, String service_cost, String service_duration, String service_available) {
		super();
		this.id = id;
		this.service_name = service_name;
		this.service_description = service_description;
		this.service_type = service_type;
		this.service_owner = service_owner;
		this.service_status = service_status;
		this.service_cost = service_cost;
		this.service_duration = service_duration;
		this.service_available = service_available;
	}


	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}


	public String getService_name() {
		return service_name;
	}


	public void setService_name(String service_name) {
		this.service_name = service_name;
	}


	public String getService_description() {
		return service_description;
	}


	public void setService_description(String service_description) {
		this.service_description = service_description;
	}


	public String getService_type() {
		return service_type;
	}


	public void setService_type(String service_type) {
		this.service_type = service_type;
	}


	public String getService_owner() {
		return service_owner;
	}


	public void setService_owner(String service_owner) {
		this.service_owner = service_owner;
	}


	public String getService_status() {
		return service_status;
	}


	public void setService_status(String service_status) {
		this.service_status = service_status;
	}


	public String getService_cost() {
		return service_cost;
	}


	public void setService_cost(String service_cost) {
		this.service_cost = service_cost;
	}


	public String getService_duration() {
		return service_duration;
	}


	public void setService_duration(String service_duration) {
		this.service_duration = service_duration;
	}


	public String getService_available() {
		return service_available;
	}


	public void setService_available(String service_available) {
		this.service_available = service_available;
	}


	@Column(length = 50, nullable = false)

    private String service_name;
    

    @Column(length = 50, nullable = false)

    private String service_description;
    

    @Column(length = 50, nullable = false)

    private String service_type;
    

    @Column(length = 50, nullable = false)

    private String service_owner;
    

    @Column(length = 50, nullable = false)

    private String service_status;
    

    @Column(length = 50, nullable = false)

    private String service_cost;
    

    @Column(length = 50, nullable = false)

    private String service_duration;
    

    @Column(length = 50, nullable = false)

    private String service_available;
    
    public Service(){
    	
    }





    

    

}