import axios from 'axios';

export const fetchWorkshopsList = () => {
    return axios.get (`https://workshops-server.herokuapp.com/workshops`)
                .then(response => {
                    console.log ( response.data );
                    return response.data;
                })
                .catch(error => {
                    console.log ( error.message );
                    throw error.message;
                });
}

export const fetchWorkshopById = ( id ) => {
    return axios.get (`https://workshops-server.herokuapp.com/workshops/${id}`)
                .then(response => {
                    console.log ( response.data );
                    return response.data;
                })
                .catch(error => {
                    console.log ( error.message );
                    throw error.message;
                });
}

export const fetchWorkshopSessions = ( workshopId ) => {
    return axios.get( `https://workshops-server.herokuapp.com/workshops/${workshopId}/sessions` )
                .then( response => {
                    console.log ( response.data );
                    return response.data;
                })
                .catch( error => {
                    console.log ( error.message );
                    throw error;
                });
}

export const updateSessionUpvoteCount = ( workshopSessionId, vote ) => {
    return axios.put( `https://workshops-server.herokuapp.com/sessions/${workshopSessionId}/${vote}` )
                .then( response => {
                    console.log ( response.data );
                    return response.data;
                })
                .catch( error => {
                    console.log ( error.message );
                    throw error.message;
                });
}