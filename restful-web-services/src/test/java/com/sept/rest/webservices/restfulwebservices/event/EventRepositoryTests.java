package com.sept.rest.webservices.restfulwebservices.event;

import com.sept.rest.webservices.restfulwebservices.jwt.JwtUserDetails;
import org.junit.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@DataJpaTest
public class EventRepositoryTests {

    @Autowired
    private EventRepository eventRepo;

    @Autowired
    private TestEntityManager entityManager;


    @Test
    public void getAllEventsForStudent() {
        /* Given */
        JwtUserDetails student = new JwtUserDetails(1l, "s123", "password", "Student");
        List<Event> testEvents = new ArrayList<>();
        Event event1 = new Event();
        event1.setName("event 1");
        event1.setUsername(student.getUsername());
        testEvents.add(event1);
        Event event2 = new Event();
        event2.setName("event 2");
        event2.setUsername(student.getUsername());
        testEvents.add(event2);
        Event event3 = new Event();
        event2.setName("event 3");
        event2.setUsername(student.getUsername());
        testEvents.add(event3);
        entityManager.persist(event1);
        entityManager.persist(event2);
        entityManager.persist(event3);
        entityManager.flush();

        /* When */
        List<Event> eventList = eventRepo.findByUsername(student.getUsername());

        /* Then */
        Assert.assertEquals(testEvents, eventList);
    }

    @Test
    public void removeEvent(){
        //given
        Event event1 = new Event();
        event1.setName("event 1");
        event1.setUsername(student.getUsername());
        entityManager.persist(event1);
        //when
        entityManager.remove(event1);
        //then
        Assert.assertEquals(entityManager.find(event1), false)

    }

    @Test
    public void testEventLocation(){
        //given
        Event event = new Event();
        //when
        event.setLocation("Location");
        //then
        Assert.assertEquals(event.getLocation(), "Location")
    }

    @Test
    public void testEventStartTime(){
        //given
        Event event = new Event();
        //when
        event.setStartTime("starttime");
        //then
        Assert.assertEquals(event.getStartTime(), "starttime")
    }

    @Test
    public void testEventEndTime(){
        //given
        Event event = new Event();
        //when
        event.setEndTime("endtime");
        //then
        Assert.assertEquals(event.getEndTime(), "endtime")
    }

    @Test
    public void testEventImgURL(){
        //given
        Event event = new Event();
        //when
        event.setImgURL("eventTestURL");
        //then
        Assert.assertEquals(event.getImgURL(), "eventTestURL")
    }
}
