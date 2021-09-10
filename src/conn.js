const express = require('express');
const router = express.Router();
var mysql = require('mysql');

// Connection Function Start
const conn = () => {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "member"
    });
    return connection;
}
// Connection Function End

// Ajax Post Start
router.post('/sample', function(req, res){

    // let myJson = req.body;
    let username = req.body.username;	
    let title = req.body.title;	
    let request_form = req.body.request_form;	
    var msg = "";
    var status = "";
  
    if(username != "" && title != "" && request_form != ""){
      var con = conn();
  
      // Insertion Start
      con.connect((err)=>{
          if(err) throw err;
          var sql = "INSERT INTO member (f_username, f_title, f_response_text) VALUES (?,?,?)";
          var data = [username, title, request_form];
          con.query(sql, data, (err, result) => {
            if (err) throw err;
  
            var return_result = JSON.stringify(result);
            console.log("1 record inserted and current result: "+return_result);
  
            var return_result_ar = return_result.affectedRows;
            if(return_result_ar != "0"){
              
              msg = "Data received";
              status = "200";
              res.send({"status":status, "msg":msg, "username":username});
  
            }
            else {
  
              msg = "DB Connection Error";
              status = "404";
              res.send({"status":status, "msg":msg});
  
            }
  
          });
      });
      // Insert End
    }
    else{
      msg = "Data received empty value!";
      status = "404";
      res.send({"status":status, "msg":msg});
  
    }
  
    // res.send(myJson);	
    // var status = res.statusCode;
    // res.send({"status":status, "msg":msg});
  
});
// Ajax Post End
  

router.get('/members', (req, res)=>{
      con = conn();
      // Read Start
      con.connect((err)=>{
          if(err) throw err;
          var sql = "SELECT f_username, f_response_text FROM member GROUP BY f_username ORDER BY testing_id DESC";
          con.query(sql, (err, rows) => {
            if (err) throw err;

            var return_result = [];
            var return_result2 = [];
            for(var i=0; i < rows.length; i++){
              // console.log("Current username: "+rows[i].f_username);
              // console.log("Current feedback: "+rows[i].f_response_text);
              // return_result[i] = rows[i].f_username;
              // var usernames = rows[i].f_username;
              // var feedback = rows[i].f_response_text;
              return_result[i] = rows[i].f_username;
              return_result2[i] = rows[i].f_response_text;
            }
            res.send(rows);
            // res.json(return_result);

          });
      });
      // Read End
    //   res.send("Hello");
});

module.exports = router;