/**
 * Created by FD1 on 2018/4/21.
 */
"use strict";
var mysql_1 = require('mysql');
var MysqlConnection = (function () {
    function MysqlConnection() {
    }
    MysqlConnection.prototype.init = function () {
        // this.connectionConf.host = 'localhost';
        // this.connectionConf.user = 'root';
        // this.connectionConf.password = 'root';
        // this.connectionConf.port = 3306;
        // this.connectionConf.database = 'julia';
        this.connectionConf = {
            host: "localhost",
            port: 3306,
            user: "root",
            password: "root",
            database: "julia"
        };
        this.connection = mysql_1.createConnection(this.connectionConf);
        this.connection.connect();
    };
    ;
    MysqlConnection.prototype.query = function (sql) {
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            console.log(result);
        });
    };
    MysqlConnection.prototype.endConnection = function () {
        this.connection.end();
    };
    ;
    return MysqlConnection;
}());
exports.MysqlConnection = MysqlConnection;
