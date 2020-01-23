const mongoose = require('mongoose');

const dbName = 'places_facilito_api_course';

module.exports = {
  connect: ()=> mongoose.connect('mongodb://localhost/'+dbName),
  dbName,
  connection: ()=>{
    if(mongose.connection)
      return mongoose.connection;
    return this.connect();
  }
}
