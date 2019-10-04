package com.sept.rest.webservices.restfulwebservices;

import com.sept.rest.webservices.restfulwebservices.login.Student;
import com.sept.rest.webservices.restfulwebservices.login.StudentRepository;
import com.sept.rest.webservices.restfulwebservices.jwt.JwtInMemoryUserDetailsService;
import com.sept.rest.webservices.restfulwebservices.jwt.JwtUserDetails;

import org.junit.*;
import static org.junit.Assert.assertEquals;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import java.sql.*;

public class JwtUserInMemoryTests {

    Connection connection;
    JwtUserDetails mockUser;
    JwtInMemoryUserDetailsService mockService;
    Student mockStudent;

    @Before
    public void setUpDatabase() throws SQLException {

        this.connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/septfansdb","root", ""); 

    }
    
    public void setUp() throws Exception {

        Long id = new Long(1);
        String username =  new String("mockUser");
        String password = new String("mockPass");
        String role = new String("mockRole");
        
        this.mockService = new JwtInMemoryUserDetailsService();
        this.mockUser = new JwtUserDetails(id, username, password, role);
        this.mockStudent = mockService.save(mockUser);

    }

    @Test
    public void checkUsername() throws UsernameNotFoundException {
        if (this.mockStudent != null){
            System.out.println(mockStudent.toString());
            assertEquals(mockService.loadUserByUsername(mockStudent.getUsername()), this.mockUser);
        } else {
            System.out.println(mockUser.toString());
        }
    }

    @After
    public void closeDatabase() throws SQLException {
        this.connection.close();
    }



}