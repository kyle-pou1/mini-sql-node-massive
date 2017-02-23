var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var controller = require('./controller.js');

var connectionString = 'postgres://kylepoulsen@localhost/sandbox';
var massiveInstance = massive.connectSync({connectionString : connectionString})


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);

var db = app.get('db');

// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });

// db.get_planes(function(err, planes) {
//   console.log(err, planes);
// })

controller.getPlanes();


app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})
