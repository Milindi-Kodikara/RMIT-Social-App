package com.sept.rest.webservices.restfulwebservices.repository;

import org.springframework.data.repository.CrudRepository;

import com.sept.rest.webservices.restfulwebservices.model.Student;

public interface StudentRepository extends CrudRepository<Student, Integer> {
	Student findByUsername(String username);
}
