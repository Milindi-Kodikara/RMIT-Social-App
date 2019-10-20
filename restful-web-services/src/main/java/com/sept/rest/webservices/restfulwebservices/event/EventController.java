package com.sept.rest.webservices.restfulwebservices.event;

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
Class to send event data from the database to the front end
 */

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EventController {

	@Autowired
	private EventRepository eventRepo;

	@GetMapping("/events")
	public List<Event> getAllEvents(){
		List<Event> eventsList = new ArrayList<>();
		Iterable<Event> eventIterator = eventRepo.findAll();
	    for (Event event : eventIterator) {
	        eventsList.add(event);
	    }

		return eventsList;
	}

	@GetMapping("/events/{id}")
	public Event getEvent(@PathVariable long id){
		return eventRepo.findById(id);
	}

	@PostMapping("/events")
	public Event createEvent(@RequestBody Event event){

		Event createdEvent = eventRepo.save(event);

		return createdEvent;
	}

}
