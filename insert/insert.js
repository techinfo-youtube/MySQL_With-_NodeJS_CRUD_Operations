var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();
router.post("/",(req,res)=>{
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_sal = req.body.e_sal;
    connection.query("insert into employees values("+e_id+",'"+e_name+"',"+e_sal+")",
                    (err,result)=>{
        if(err){
            res.send({"insert":"fail"});
        }else{
            res.send({"insert":"success"});
        }
    }); 
});
module.exports = router;