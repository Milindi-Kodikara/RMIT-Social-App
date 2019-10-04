package com.sept.rest.webservices.restfulwebservices.login;

import org.junit.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class StudentRepositoryTests {

    @Autowired
    private StudentRepository studentRepo;

    @Autowired
    private TestEntityManager entityManager;


    @Test
    public void getStudentByUsername() {
        /* Given */
        Student student = new Student();
        student.setUsername("Alice");
        entityManager.persist(student);
        entityManager.flush();

        /* When */
        Student getByID = studentRepo.findByUsername(student.getUsername());

        /* Then */
        Assert.assertEquals(getByID,student);
    }
}
