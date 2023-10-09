package com.mindunits.sanjay.controller;


	

	import java.util.List;

	

	import org.springframework.beans.factory.annotation.Autowired;



	import org.springframework.web.bind.annotation.DeleteMapping;

	import org.springframework.web.bind.annotation.GetMapping;



	import org.springframework.web.bind.annotation.PostMapping;

	import org.springframework.web.bind.annotation.PutMapping;

	import org.springframework.web.bind.annotation.RequestBody;

	import org.springframework.web.bind.annotation.RequestMapping;

	import org.springframework.web.bind.annotation.RequestParam;

	import org.springframework.web.bind.annotation.RestController;

import com.mindunits.sanjay.model.*;
import com.mindunits.sanjay.repository.ServiceRepository;

	@RequestMapping("/api/apply")

	@RestController
	public class ServiceController {

	@Autowired

	ServiceRepository repo ;

	@PostMapping("/add")

	public Service save(@RequestBody Service emp)

	{

	return repo.save(emp) ;

	}

	@GetMapping("/get")

	public List<Service> get(Service emp)

	{

		return repo.findAll() ;

	}

	@PutMapping("update")

	public Service update(@RequestBody Service emp)

	{

	return repo.saveAndFlush(emp) ;

	}

	@DeleteMapping("/delete")

	public String delete(@RequestParam long id)

	{
		repo.deleteById(id) ;

		return "DELETED SUCCESSFULLY" ;

	}

	

	}