import axios from 'axios'
import { API_URL } from '../../src/Constants'
import AuthenticationService from '../Screens/AuthenticationService'
import { interfaceDeclaration } from '@babel/types';

class EventDataService {

    showAllEvents(){
        return axios.get(`http://localhost:8080/events`);
    }

    showEvent(id) {
        console.log(id)
        return axios.get(`http://localhost:8080/events/${id}`);
    }

    createEvent(){
        return axios.post(`http://localhost:8080/events`);
    }
}

export default new EventDataService()
