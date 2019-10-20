package com.sept.rest.webservices.restfulwebservices.login;


import com.sept.rest.webservices.restfulwebservices.todo.Todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
/*
Class to send student data from the database to the front end
 */
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class StudentController {

    @Autowired
    private StudentRepository studentRepo;

    //get id when username is given
    @GetMapping("/students/login/{username}")
    public long getStudentId(@PathVariable String username){
        return studentRepo.findByUsername(username).getId();
    }

    //get a single profile depending on the user id
    @GetMapping("/students/{id}")
    public Student getStudent(@PathVariable long id){
        return studentRepo.findById(id);
    }

    @PostMapping("/students")
    public void addStudent(@RequestBody Student student){
        Student addedStudent = studentRepo.save(student);
    }
}
