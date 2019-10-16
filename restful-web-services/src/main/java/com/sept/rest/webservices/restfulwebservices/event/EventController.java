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

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EventController {

	@Autowired
	private EventRepository eventRepo;


	// @GetMapping("/{username}/events")
	// public List<Event> getAllEventsForStudent(@PathVariable String username){
	// 	return eventRepo.findByUsername(username);
	// }

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
	// public ResponseEntity<Void> createEvent(
	// 		@PathVariable String username, @RequestBody Event event){
		
		// event.setUsername(username);

		Event createdEvent = eventRepo.save(event);

		// URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
		// 		.path("/{id}").buildAndExpand(createdEvent.getId()).toUri();

		return createdEvent;
	}

	// @GetMapping("/{username}/events/{id}")
	// public Event getEvent(@PathVariable String username, @PathVariable long id){
	// 	return eventRepo.findById(id);
	// }

	// @DeleteMapping("/{username}/events/{id}")
	// public ResponseEntity<Void> deleteEvent(@PathVariable String username, @PathVariable long id) {

	// 	eventRepo.deleteById((int) id);

	// 	return ResponseEntity.noContent().build();
	// }


	// @PutMapping("/{username}/events/{id}")
	// public ResponseEntity<Event> updateEvent(
	// 		@PathVariable String username,
	// 		@PathVariable long id, @RequestBody Event event){

	// 	event.setUsername(username);

	// 	Event eventUpdated = eventRepo.save(event);

	// 	return new ResponseEntity<Event>(event, HttpStatus.OK);
	// }

	// @PostMapping("/{username}/events")
	// public ResponseEntity<Void> createEvent(
	// 		@PathVariable String username, @RequestBody Event event){

	// 	event.setUsername(username);

	// 	Event createdEvent = eventRepo.save(event);

	// 	URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
	// 			.path("/{id}").buildAndExpand(createdEvent.getId()).toUri();

	// 	return ResponseEntity.created(uri).build();
	// }

}
