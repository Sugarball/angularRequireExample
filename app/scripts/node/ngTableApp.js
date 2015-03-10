/**
 * Created by gujun on 15/3/4.
 */
var express = require('express')
  , path = require('path')
  , ejs = require('ejs')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

io.on('connection', function (socket) {
  console.log(socket.handshake);
  setInterval(function(){
    var users= [
      {"name": "Moroni", "age": Math.round(Math.random() * 100)},
      {"name": "Enos", "age":Math.round(Math.random() * 100)}
    ];
    socket.emit('ngTableSocket', users);
  },2000);
});

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

if (app.get('env') === 'development') {
  app.use(express.errorHandler());
};

if (app.get('env') === 'production') {
  // TODO
};


server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
