// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/api');

// const db = mongoose.connection;

// db.on('error', console.error);
// db.once('open', () => {
//     console.log('connection successful');
// });

// module.exports = {
//     mongoose,
//     users: require('./schemas/users'),
//     messages: require('./schemas/messages')
// };

function dbConnectionHandler() {
    const mongoose = require("mongoose");
    mongoose.connect('mongodb://localhost/api', {
        auto_reconnect: true,
        poolSize: 40
    });
  
    mongoose.set("debug", true);
  
    this.connection = mongoose.connection;
  
    mongoose.connection.on("connected", function() {
      this.state = "connected";
    });
  
    mongoose.connection.on("error", function(err) {
      this.state = "disconnected";
    });
  
    mongoose.connection.on("disconnected", function() {
      this.state = "disconnected";
    });
  
    process.on("SIGINT", function() {
      mongoose.connection.close(function() {
        this.state = "disconnected";
        process.exit(0);
      });
    });
  }
  
  module.exports = new dbConnectionHandler();