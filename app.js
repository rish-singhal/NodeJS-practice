var express = require('express');
var bp = require('body-parser');
var app = express();

var urlencodedParser = bp.urlencoded({ extended:false });

app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));

app.get('/',function(req, res){
    res.render('index');
});

app.get('/contact',function(req, res){
    res.render('contact',{qs: req.query});
});

app.post('/contact',urlencodedParser,function(req, res){
    console.log(req.body);
    res.render('contact-success',{data: req.body});
});

app.get('/profile/:name', function(req, res){
    var data = {age: 20, job:'student', hobbies : ['eating','fighting','fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(8000);
console.log('Listening at http://localhost:8000');

