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

import com.mindunits.sanjay.model.BookingCustomer;
import com.mindunits.sanjay.repository.BookingCustomerRepository;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin
public class BookingCustomerController {
	@Autowired
	private BookingCustomerRepository bookingRepository;
	
	@PostMapping("/add")
	public BookingCustomer add(final @RequestBody BookingCustomer user)
	{
		return bookingRepository.save(user) ;
		
	}
	@GetMapping("/get")
	public List<BookingCustomer> getAllStudent()
	{
		return bookingRepository.findAll() ;
	}
	@GetMapping("/gets/{id}")
	public BookingCustomer getAllStudents(@PathVariable int id)
	{
		return bookingRepository.findById(id).orElse(null) ;
	}
	@PutMapping("/put/{id}")
	BookingCustomer update(@RequestBody BookingCustomer apply, @PathVariable int id)
	{
		return bookingRepository.findById(id)
				.map(user->{
					user.setId(apply.getId());
					user.setCustomerfullname(apply.getCustomerfullname());
					user.setCustomerage(apply.getCustomerage());
					user.setCustomergender(apply.getCustomergender());
					user.setCustomerphone(apply.getCustomerphone());
					user.setCustomeremail(apply.getCustomeremail());
					user.setCustomeraddress(apply.getCustomeraddress());
					user.setService(apply.getService());
					user.setCustomercountry(apply.getCustomercountry());
					user.setCustomerstate(apply.getCustomerstate());
					user.setDate(apply.getDate());
					return bookingRepository.save(apply);
				})
	            .orElse(null);
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		bookingRepository.deleteById(id) ;
		return "Deleted Successfully" ;
	}
	
	
}
