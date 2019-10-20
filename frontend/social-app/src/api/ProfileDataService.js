import axios from 'axios'
import {API_URL} from '../../src/Constants'
import AuthenticationService from '../Screens/AuthenticationService'

class ProfileDataService {

    //Show the profile of the user
    showProfile(id) {
        return axios.get(`http://localhost:8080/students/${id}`);
    }


}

export default new ProfileDataService()