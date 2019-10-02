package com.sept.rest.webservices.restfulwebservices.jwt;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sept.rest.webservices.restfulwebservices.login.Student;
import com.sept.rest.webservices.restfulwebservices.login.StudentRepository;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;
	

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Student user = studentRepo.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		
		org.springframework.security.core.userdetails.User loadedUser = new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
		return loadedUser;
	}
	
	public Student save(JwtUserDetails user) {
		Student newUser = new Student();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return studentRepo.save(newUser);
	}
}




