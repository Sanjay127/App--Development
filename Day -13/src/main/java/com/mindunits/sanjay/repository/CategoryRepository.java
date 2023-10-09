package com.mindunits.sanjay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindunits.sanjay.model.Categories;


@Repository

public interface CategoryRepository extends JpaRepository<Categories, Long>{



}
