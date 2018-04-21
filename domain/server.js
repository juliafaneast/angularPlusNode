"use strict";
exports.__esModule = true;
/**
 * Created by FD1 on 2018/4/21.
 */
// let express = require('express');
var express = require("express");
var dbInit_1 = require("./dbInit");
var app = express();
// This is used to solve Cross-domain issue
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,jwt");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    if (req.method === "OPTIONS") {
        res.end();
    }
    else {
        next();
    }
});
// main page
app.get('/', function (req, res) {
    console.log('>>>>>Get request');
    res.send('Hello World!');
});
app.get('/api/name', function (req, res) {
    console.log('>>>>>Get name');
    var mysql = new dbInit_1.MysqlConnection();
    mysql.init();
    var sql = "select name from user where id = 1";
    mysql.query(sql);
    res.jsonp({ name: "Julia" });
});
// post request
app.post('/', function () {
    console.log('>>>>>Post request');
});
// put request
app.put('/', function () {
    console.log('>>>>> Put request');
});
// delete request
app["delete"]('/', function () {
    console.log('>>>>>Delete request');
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Access address  http://%s:%s", host, port);
});
