package com.sept.rest.webservices.restfulwebservices.event;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

// Read in details from the SQL

public interface EventRepository extends CrudRepository<Event, Integer> {
	Event findById(long id);
	List<Event> findByUsername(String username);
}
