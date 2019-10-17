package com.sept.rest.webservices.restfulwebservices.login;


import java.net.URI;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
/*
Class to send student data from the database to the front end
 */
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class StudentController {

    @Autowired
    private StudentRepository studentRepo;

    //get a single profile depending on the user id
    @GetMapping("/students/{id}")
    public Student getStudent(@PathVariable long id){
        return studentRepo.findById(id);
    }
}
