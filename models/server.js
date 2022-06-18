const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    // Middlewares
    this.middlewares();

    // App Routes
    this.routes();

  }

  middlewares() {
    // Cors
    this.app.use( cors() );

    // Read & parse
    this.app.use( express.json() );

    // Public Directory
    this.app.use( express.static('public') );
  }

  routes() {

    this.app.use( this.usersPath, require('../routes/users') )

  }

  listen() {
    this.app.listen( this.port, () => {
      console.log(`Listening from port: ${ this.port }`);
    })
  }





}

module.exports = Server;