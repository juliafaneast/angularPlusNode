/**
 * Created by FD1 on 2018/4/21.
 */
let config = {};

config.servicePort = 8081;

//db account
var db_server = "localhost";
var db_user = "root";
var db_password = "root";

config.distributedDBs = [];

config.centralizedDB = {
    connectionLimit: 5,
    host: db_server,
    database: 'julia',
    user: db_user,
    password: db_password
};

config.db = "MySQL";//MySQL or PostgreSQL
config.loginType = "MySQL";


module.exports = config;