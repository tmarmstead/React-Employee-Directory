import axios from 'axios';
import pic from ""


export default {
    getUsers: function () {
        return axios.get('https://randomuser.me/api/?results=35&nat=us');
    }
};