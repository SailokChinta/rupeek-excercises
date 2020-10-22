const axios = require( 'axios' );

const username = 'Bret';

async function getCommentorEmailIds( username ) {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);

    const posts = await axios.get(`https://jsonplaceholder.typicode.com/users/${users.data[0].id}/posts`);
    
    const comments = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${posts.data[0].id}`);
    
    const emailIds = [];
    comments.data.forEach( comment => emailIds.push( comment.email ) );

    return emailIds;
}

getCommentorEmailIds( username )
    .then( emailIds => console.log( emailIds ) )
    .catch( err => console.log( err.message ) );