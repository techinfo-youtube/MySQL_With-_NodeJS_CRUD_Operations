var prop = require('./db_properties');

var mysql = require ('mysql');

module.exports = {
    getConnection : ()=>{
        return mysql.createConnection(prop);
    }
}

