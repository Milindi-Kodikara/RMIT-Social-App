import React from 'react';
import renderer from 'react-test-renderer';
import CreateEventModal from "../Components/CreateEventModal";
import {shallow} from 'enzyme';

const addDummyData = jest.fn(

);

beforeEach(() => {
    addDummyData();
})

const wrapper = shallow(<CreateEventModal/>);
