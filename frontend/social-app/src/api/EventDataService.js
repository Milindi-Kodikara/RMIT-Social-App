import axios from 'axios'
import { API_URL } from '../../src/Constants'
import AuthenticationService from '../Screens/AuthenticationService'
import { interfaceDeclaration } from '@babel/types';

class EventDataService {

    showAllEvents(){
        //console.log('executed service')
        return axios.get(`http://localhost:8080/events`);
    }

    showEvent(id) {
        console.log(id)
        return axios.get(`http://localhost:8080/events/${id}`);
    }

    createEvent(){
        return axios.put(`http://localhost:8080/events`);
    }
}

export default new EventDataService()
