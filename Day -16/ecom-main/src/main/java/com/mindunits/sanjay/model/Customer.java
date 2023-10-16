package com.mindunits.sanjay.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;




@Entity
@Table(name = "_customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cid;

	@Column(length = 50, nullable = false)
    private String firstname;
    

    @Column(length = 50, nullable = false)
    private String lastname;
    
    

    @Column(length = 50, nullable = false)
    private int age;
    

    @Column(length = 50, nullable = false)
    private String gender;

    @Column(length = 50, nullable = false)
    private String phone;
    
    @Column(length = 50, nullable = false)
    private String address;
    
    @Column(length = 50, nullable = false)
    private String country;
    

    @Column(length = 50, nullable = false)
    private String state;


    public int getCid() {
        return cid;
    }


    public void setCid(int cid) {
        this.cid = cid;
    }


    public String getFirstname() {
        return firstname;
    }


    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }


    public String getLastname() {
        return lastname;
    }


    public void setLastname(String lastname) {
        this.lastname = lastname;
    }


    public int getAge() {
        return age;
    }


    public void setAge(int age) {
        this.age = age;
    }


    public String getGender() {
        return gender;
    }


    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getPhone() {
        return phone;
    }


    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getAddress() {
        return address;
    }


    public void setAddress(String address) {
        this.address = address;
    }


    public String getCountry() {
        return country;
    }


    public void setCountry(String country) {
        this.country = country;
    }


    public String getState() {
        return state;
    }


    public void setState(String state) {
        this.state = state;
    }


    public Customer(int cid, String firstname, String lastname, int age, String gender, String phone, String address,
            String country, String state) {
        this.cid = cid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
        this.country = country;
        this.state = state;
    }

    public Customer()
    {
        super();
    }


    

}

