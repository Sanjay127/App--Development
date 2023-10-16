package com.mindunits.sanjay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mindunits.sanjay.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
    
    
}
