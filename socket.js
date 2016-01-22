var express = require('express');
var app = express();
app.set('views', __dirname);
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);

app.get('/', function(req, res) {
    res.status(200).send('欢迎来到汇智网学习！');
});
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//path
//app.use('/static', express.static('public'));

io.on('connection', function(socket) {
    //连接成功...
    socket.send('汇智网欢迎你！');

    //event name 
    socket.on('message', function(data) {
        //收到消息
        console.log(data);
    });
});

app.get('/index', function(req, res) {
    res.render('index');
});

server.listen(3001);
