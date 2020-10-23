# NodeJS/ExpressJS App creation journey
## Basic setup
1. initilise the project as node project
```
npm init -y
```
2. Make a folder src to maitain all the files
3. Create index.js
4. Set "main": "src/index.js"
5. Set "start": "node ."
6. create folders  views, routes, public. 
- Views indicate all html files.
- Routes indicate where we set route paths. 
- Public has all the static files
7. Set the basic express code to start the server
```
const app = express();
app.listen( port, err => {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( `Server started on http://localhost:${port}`);
});
```
8. Inorder to avoid the frequent restarting of application, we need to install a package called nodemon
```
npm i nodemon --save-dev
```
9. In package.json, under scripts set "start": "nodemon ."


## Setting up Routes
1. In routes folder, make a JS file for each portion of the website
2. Set up the router in the following way
```
const router = express.Router();

router.get( '/', ( req, res ) => {
    res.sendFile( path.join( __dirname, '..', 'views', 'index.html' ) );
});
```
3. export the router object. Now import the router object in first level index.js file and set the route in the following way.
```
const indexRouter = require( './routes/index' );

app.use( indexRouter );
``` 
4. To work with CSS/JS static files, we need to copy bootstrap files from node_modules to a public folder in src. For that we need to install cpx package
```
npm i cpx --save-dev
```
5. To copy any files from one place to another, in Package.json under scripts add
```
"copy": "cpx \"./node_modules/bootstrap/dist/**\" \"./src/public/bootstrap\"",
```

## Setting up Various folder
1. Create Controller, Data, Middleware inside src folder.
- data folder has JSON data, that will serve as the database. This will eventually evolve to get data from DB
- controller folder has files where functions are written to communicate with DB.
- middleware folder is setup to write utility functions and do error handling
2. We use the functions in contoller folder to serve the json data or render html page, no need of axios

## Generating HTML using EJS
1. install EJS
```
npm i ejs
```
2. Change the extensions of views from .html to .ejs
3. Syntax of ejs
```
<h1><%= heading %></h1>
```
4. In the first level index.js, add these two lines
```
app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'views' ) );
```
5. In Routes folder, change tthis piece of code
```
router.get( '/', ( req, res ) => {
    // res.sendFile( path.join( __dirname, '..', 'views', 'index.html' ) );
    res.render( 'index', {
        heading: 'Workshops App | Home',
        appTitle: 'Workshops App v2'
    });
});
```
6. Some EJS Syntax
```
render text => <%= text =%>

use JS => <% if ( cond1 ) { %>
          <% } %>

render HTML => <%- <p> HTML Content </p> %>
```
## Connection To Database [ MongoDB ]
1. For Connection with Database, we use either mongodb driver or mongoose.
2. First lets see using MongoDB, to install it
```
npm i mongodb
```
3.  This is the way to create a mongo client
```
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
```
4. To connect to database, also we need to export the client for using it in controller files.
```
async function connect() {
    try {
        await client.connect();
    } catch( error ) {
        await client.close();
    }
}

module.export = { client }
```
5. For CRUD operations, visit here [MongoDB Doc](https://docs.mongodb.com/drivers/node/usage-examples/findOne).
6. Now lets use Mongoose, for installing use
```
npm i mongoose
```