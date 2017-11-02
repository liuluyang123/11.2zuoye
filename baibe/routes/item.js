var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var con=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'zuoye'
});
/* GET home page. */
router.post('/list',function(req, res, next) {
    res.header('Access-Control-Allow-Origin',"*")
    var a=req.body.AA;
    var b=req.body.BB;
    var c=req.body.CC;
    console.log(a);
    console.log(b);
    console.log(c);
    con.query('INSERT INTO txt(name,title,shijian) VALUES("'+a+'","'+b+'","'+c+'")',function(err,rows){

        res.send(rows);
        console.log(rows)
    })
});
router.post('/in',function(req, res, next) {
    res.header('Access-Control-Allow-Origin',"*");
    //console.log(a);
    con.query('SELECT * FROM txt', function(err,rows){
        res.send(rows)
        console.log(rows)
    })
});

module.exports = router;