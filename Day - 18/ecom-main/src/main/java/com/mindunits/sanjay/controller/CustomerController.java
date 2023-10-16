package com.mindunits.sanjay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


import com.mindunits.sanjay.model.Customer;

import com.mindunits.sanjay.repository.CustomerRepository;



@RestController
@RequestMapping("/api/profile")
@CrossOrigin()
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@PostMapping("/add")
	public Customer add(final @RequestBody Customer user)
	{
		return customerRepository.save(user) ;
		
	}
	@GetMapping("/get")
	public List<Customer> getAllStudent()
	{
		return customerRepository.findAll() ;
	}
	@GetMapping("/gets/{cid}")
	public Customer getAllStudents(@PathVariable int cid)
	{
		return customerRepository.findById(cid).orElse(null) ;
	}
	@PutMapping("/put/{cid}")
	Customer update(@RequestBody Customer apply, @PathVariable int cid)
	{
		return customerRepository.findById(cid)
				.map(user->{
					user.setCid(apply.getCid());
					user.setFirstname(apply.getFirstname());
					user.setLastname(apply.getLastname());
					user.setAge(apply.getAge());
					user.setGender(apply.getGender());
					user.setPhone(apply.getPhone());
					user.setAddress(apply.getAddress());
					user.setCountry(apply.getCountry());
					user.setState(apply.getState());
					return customerRepository.save(apply);
				})
	            .orElse(null);
	}
	@DeleteMapping("/delete/{cid}")
	public String delete(@PathVariable int cid)
	{
		customerRepository.deleteById(cid) ;
		return "Deleted Successfully" ;
	}
	
}
