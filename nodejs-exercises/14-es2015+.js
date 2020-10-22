const axios = require( 'axios' );

const username = 'Bret';


function getCommentorEmailIds( username ) {
    return axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
    .then( users => {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${users.data[0].id}/posts`);
    })
    .then( posts => {
        return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${posts.data[0].id}`);
    })
    .then( comments => {
        const emailIds = [];
        comments.data.forEach( comment => emailIds.push( comment.email ) );
        return emailIds;
    })
    .catch( err => {
        console.log( err.message );
        throw err;
    });
}

getCommentorEmailIds( username )
    .then( emailIds => console.log( emailIds ) )
    .catch( err => console.log( err ) );

