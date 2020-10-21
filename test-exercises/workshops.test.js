import { fetchWorkshops } from './workshops';
import axios from 'axios';

// generate mock axios and substitute for real axios functions;
jest.mock( 'axios' ); // we need to configure what get function should return 
// (mock) axios : {get: function(), put: ...}

describe( 'fetchWorkshops function', () => {
    let mockSuccessResponse = {
        data: [
            { name: 'Angular' },
            { name: 'React' },
            { name: 'Vue' },
            { name: 'Svelte' },
        ],
    };

    let mockRejectedResponse = { 
        message: 'Request failed with status code 404'
    };

    it( 'fetchWorkshops returns a Promise that resolves with the workshops', (  ) => {
        axios.get.mockResolvedValue( mockSuccessResponse );
        axios.get.mockRejectedValue( mockRejectedResponse ); /* -> for rejecting the value; */
    
        // if we return a promise, the test will not conclude till the returned promise is resolved
        // after the then() handler is executes, the promise gets resolved
        fetchWorkshops()
            .then( data => {
                expect( data ).toBe( mockSuccessResponse.data );
                // done();
            })
            .catch ( error => {
                expect( error ).toBe( mockRejectedResponse );
            });
    } );
}); 