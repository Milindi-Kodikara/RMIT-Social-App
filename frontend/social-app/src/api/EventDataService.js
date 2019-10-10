import axios from 'axios'
import { API_URL } from '../../src/Constants'
import AuthenticationService from '../Screens/AuthenticationService'

class EventDataService {

    showAllEvents(){
        //console.log('executed service')
        return axios.get("http://localhost:8080/events");
    }

    // showEvent(id) {
    //     //console.log('executed service')
    //     return axios.get("http://localhost:8080/feed/${id}");
    // }

    // deleteEvent(id) {
    //     console.log('executed service')
    //     return axios.delete(`http://localhost:4200/event/${id}/delete`);
    // }
}

export default new EventDataService()
