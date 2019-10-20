import axios from 'axios'
import { API_URL } from '../../src/Constants'
import AuthenticationService from '../Screens/AuthenticationService'

class EventDataService {

    showAllEvents(){
        return axios.get(`http://localhost:8080/events`);
    }

    showEvent(id) {
        return axios.get(`http://localhost:8080/events/${id}`);
    }
}

export default new EventDataService()
