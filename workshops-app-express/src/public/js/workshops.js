// Immediately Invoked Function
(function() {
    const workshopsList = document.querySelector( '#workshops-list' );
    const fetchMessage = document.querySelector( '#fetch-message' );
    function fetchWorkshops () {
        return axios.get (`/api/workshops`)
                    .then(response => {
                        console.log ( response.data );
                        return response.data;
                     })
                     .catch(error => {
                         console.log ( error.message );
                         throw error;
                     });
    }

    function addWorkshop ( workshop ) {
        workshopsList.innerHTML += `<li class="col">
        <div class="card my-3">
            <img src="${workshop.imageUrl}" alt="angularjs" class="img-fluid">    
            <h2>${workshop.name}</h2>
            <div>
                <small>
                    <span class="date">${workshop.startDate}</span> - <span class="date">${workshop.endDate}</span>
                </small>
            </div>
            <div>
                <small>${workshop.time}</small>
            </div>
            <div class="my-3">
                <span>${workshop.location.address}</span>,
                <span>${workshop.location.city}</span>,
                <span>${workshop.location.state}</span>
            </div>
            <div>
                ${workshop.description}
            </div>
        </div>
        </li>`
    }
    
    function showFetchMessage ( message, theme ) {
        fetchMessage.innerHTML = message;
        fetchMessage.style.display = 'block';
        fetchMessage.className = `message message-${theme}`;
    }

    function addWorkshops( workshops ) {
        workshops.forEach(workshop => addWorkshop(workshop)); 
        // workshops.forEach( addWorkshop ); same thing 
    }

    function hideFetchMessage() {
        fetchMessage.style.display = 'none';
    }

    function init () {
        showFetchMessage( 'Loading workshops', 'info' );

        fetchWorkshops()      // AJAX call
            .then( workshops => {
                hideFetchMessage();
                addWorkshops(workshops)
            })  // .then( addWorkshops ); same thing 
            .catch (error => {
               showFetchMessage( error.message, 'error' );
            });
    }

    init();

}())




