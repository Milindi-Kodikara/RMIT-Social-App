import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginComponent from '../../todo-app/src/components/todo/LoginComponent';
import EventItem from './Components/EventItem'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('fails this test', () => {
  var good = true;
  expect(good).toBe(true);

});

it('username state can change', () => {
  var test = new LoginComponent();
  expect(test.state.username).toBe('');
  test.state.username = 'sept';
  expect(test.state.username).toBe('sept');
});

it('password state can change', () => {
  var test = new LoginComponent();
  expect(test.state.password).toBe('');
  test.state.password = 'dummy';
  expect(test.state.password).toBe('dummy');
});

it('correct details', () => {
  var test = new LoginComponent();
  test.state.username = 'sept';
  test.state.password = 'dummy';
  test.loginClicked();
  expect(test.state.hasLoginFailed).toBe(false);
});

it('incorrect password', () => {
  var test = new LoginComponent();
  test.state.username = 'sept';
  test.state.password = 'whoopsiedoopsie';
  test.loginClicked();
  expect(test.state.hasLoginFailed).toBe(true);
});

it('incorrect username AND password', () => {
  var test = new LoginComponent();
  test.state.username = 'incorrect';
  test.state.password = 'whoopsiedoopsie';
  test.loginClicked();
  expect(test.state.hasLoginFailed).toBe(true);
});

it('invalid characters in password', () => {
  var test = new LoginComponent();
  test.state.username = 'sept';
  test.state.password = '<div />';
  test.loginClicked();
  expect(test.state.hasLoginFailed).toBe(true);
});

it('password too long', () => {
  var test = new LoginComponent();
  test.state.username = 'sept';
  test.state.password = 'whoopsiedoopsiewkojefowjefokwmoiwejfoiwnemcoiwenoinoi2n3oi1n34o21no12jn3o12j3n1kj23nk12j3nkjfnedkjvndfkjnekfjnvdkjvnekjrnwkejnfwkdfjnk2j3n4k234jnkjn';
  test.loginClicked();
  expect(test.state.hasLoginFailed).toBe(true);
});

it('has invalid characters in username', () => {
  var test = new LoginComponent();
  test.state.username = '<div>HEY<div/>';
  test.state.password = 'dummy';
  test.loginClicked();
  expect(test.state.hasLoginFailed).toBe(true);
});

it('is an event', () => {
  let events = {
    id: 'abcde',
    eventDate: new Date(),
    start: new Date(),
    end: new Date(),
    name: 'Intro to SE ',
    location: '80.5.10',
    organiser: 'bloop',
    description: 'Softwares are cool . . apparently',
    imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
  };
  // Name check
  expect(events.name.valueOf() == 'Intro to SE '.valueOf());
  // Location check
  expect(events.location.valueOf() == '80.5.10'.valueOf());


});

// can we insert into table a mock object?
it('event in sql table', () => {
  let event = 
    {
        id: '1',
        eventDate: new Date(),
        start: new Date(),
        end: new Date(),
        name: 'Intro to SE ',
        location: '80.5.10',
        organiser: "The Programming Club",
        description: 'Softwares are cool . . apparently',
        imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
    }
    // insert into todo(id, username,description,target_date,is_done) 
    // values(event.id, event.name, event.description, event.eventDate, false);
});