/**
 * Created by gthardy on 8/15/15.
 */
var express = require('express');

var app = express();

// Logging
app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

// Site Directory
app.use(express.static('public'));

app.use(function(req, res){
    res.sendFile(__dirname + '/public');
})

//app.listen(8000);
app.listen(process.env.port || 8000);