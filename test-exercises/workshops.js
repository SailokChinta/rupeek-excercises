import axios from 'axios';

export const fetchWorkshops = () => {
    return axios.get (`https://workshops-server.herokuapp.com/workshops`)
                .then(response => {
                    console.log ( response.data );
                    return response.data;
                 })
                 .catch(error => {
                     console.log ( error.message );
                     throw error;
                 });
}

export const fetchWorkshopsById = ( id ) => {
    return axios.get (`https://workshops-server.herokuapp.com/workshops/${id}`)
                .then(response => {
                    console.log ( response.data );
                    return response.data;
                 })
                 .catch(error => {
                     console.log ( error.message );
                 });
}