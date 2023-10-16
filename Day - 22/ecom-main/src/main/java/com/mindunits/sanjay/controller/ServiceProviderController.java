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

import com.mindunits.sanjay.model.*;

import com.mindunits.sanjay.repository.ServiceProviderRepository;



@RequestMapping("/api/apply/provider")

@RestController
@CrossOrigin
public class ServiceProviderController {

	@Autowired
	private ServiceProviderRepository providerRepository;
	
	@PostMapping("/add")
	public ServiceProvider add(final @RequestBody ServiceProvider user)
	{
		return providerRepository.save(user) ;
		
	}
	@GetMapping("/get")
	public List<ServiceProvider> getAllStudent()
	{
		return providerRepository.findAll() ;
	}
	@GetMapping("/gets/{id}")
	public ServiceProvider getAllStudents(@PathVariable int id)
	{
		return providerRepository.findById(id).orElse(null) ;
	}
	@PutMapping("/put/{id}")
	ServiceProvider update(@RequestBody ServiceProvider apply, @PathVariable int id)
	{
		return providerRepository.findById(id)
				.map(user->{
					user.setId(apply.getId());
					user.setProvidername(apply.getProvidername());
					user.setProviderage(apply.getProviderage());
					user.setProviderphone(apply.getProviderphone());
					user.setProvidergender(apply.getProvidergender());
					user.setProvideraddress(apply.getProvideraddress());
					user.setProviderserviceoffered(apply.getProviderserviceoffered());
					user.setProvidercategory(apply.getProvidercategory());
					user.setProviderdescription(apply.getProviderdescription());
					
					return providerRepository.save(apply);
				})
	            .orElse(null);
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		providerRepository.deleteById(id) ;
		return "Deleted Successfully" ;
	}
	



}
