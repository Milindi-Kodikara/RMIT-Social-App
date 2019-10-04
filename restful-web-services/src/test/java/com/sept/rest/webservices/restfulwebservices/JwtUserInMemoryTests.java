package com.sept.rest.webservices.restfulwebservices;

import com.sept.rest.webservices.restfulwebservices.login.Student;
import com.sept.rest.webservices.restfulwebservices.login.StudentRepository;
import com.sept.rest.webservices.restfulwebservices.jwt.JwtInMemoryUserDetailsService;
import com.sept.rest.webservices.restfulwebservices.jwt.JwtUserDetails;

import org.junit.*;
import static org.junit.Assert.assertEquals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class JwtUserInMemoryTests {

    JwtUserDetails mockUser;
    JwtInMemoryUserDetailsService mockService;
    Student mockStudent;

    @Before
    public void setUp() throws Exception {
        Long id = new Long(10001);
        String username =  new String("sept");
        String password = new String("$2a$12$fEIwUDFyxxpUDXDi8OJFcelho5eFF.5vEx9rQktPJYCJQrReEoRA6");
        String role = new String("test role");
        
        this.mockService = new JwtInMemoryUserDetailsService();
        this.mockUser = new JwtUserDetails(id, username, password, role);
        this.mockStudent = mockService.save(mockUser);

    }

    @Test
    public void checkUsername() throws UsernameNotFoundException {
        assertEquals(mockService.loadUserByUsername(mockStudent.getUsername()), this.mockUser);

    }



}