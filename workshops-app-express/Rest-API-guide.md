Resources
- A file
- Some piece of data

HTTP Verb / Method
------------------
- GET - Used to get some resource
- POST - Used to add a new resource
- PUT - Used to replace a resource (id will remain the same, but all other details change)
- PATCH - Used to change a few details about a resource
- DELETE - Used to delete the resource

For example
-----------
- Workshop
- Session
- Category

API Endpoints
-------------
API endpoints represent resources
- /workshops
        Method  URL     What it does                        Request body                                Status code         Response body
        ---------------------------------------------------------------------------------------------------------------------------------
    -   GET     /       Get all workshops                   -                                           200                 Array of workshops
    -   GET     /:id    Get the workshop with given id      -                                           200, 404            Single workshop object
    -   POST    /       Add multiple/single workshop(s)     The array of new workshops/single workshop  201, 400            The newly added workshop (will have id)
    -   PATCH   /:id    Update workshop with given id       The required fields and their new values    201, 400, 404       The newly updated workshop
    -   DELETE  /:id    Delete workshop with given id       -                                           204                 -
    We shall not implement PUT
    -   PUT     /:id                                                                                    405                 -
- /sessions
- /categories
- /users
- /workshops/1/sessions
