var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sharmila",
  database: "depositaccounts"
});

var express = require('express');
var app = express();
var fs = require("fs");
var cors = require("cors");
app.use(cors());
app.options('*', cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 

app.get('/getAccounts', function (req, res) {
   fs.readFile( __dirname + "/data/accounts.json", 'utf8', function (err, data) {
       //data = JSON.stringify(data);
       res.end( data );
   });
})
con.connect(function(err){
    if(err) throw err;
});
app.get('/getAccountsFomDB', function (req, res) {    
    con.query("SELECT * FROM deposits",function(err, result,fields) {
        if (err) throw err;          
        res.send(JSON.stringify(result));
    });
});
app.post('/saveAccountToDB',function(req,res){
    var account = req.body;
    con.query("INSERT INTO deposits (accNum,bankName,principalAmt,startDate,noOfMonths,roi,endDate,maturityAmt,repayAccount,accountHolder) VALUES (?,?,?,?,?,?,?,?,?,?)",[account.accNum,account.bankName,account.principalAmt,account.startDate,account.noOfMonths,account.roi,account.endDate,account.maturityAmt,account.repayAccount,account.accountHolder],function(err,result){
        if(err) throw err;
        res.sendStatus(200);
    });
});
app.get('/getAccountByIdFromDB',function(req,res){
    var accountID = req.query.param1;
    con.query("SELECT * FROM deposits WHERE iddeposits = ?",[accountID],function(err,result){
        if(err) throw err;
        res.send(JSON.stringify(result));
    })
});
app.post('/saveEditedAccountInDB',function(req,res){
    var account = req.body;   console.log(account); 
    con.query("UPDATE deposits SET bankName = ?,principalAmt = ?,startDate = ?,noOfMonths = ?,roi = ?,endDate = ?,maturityAmt = ?,repayAccount = ?,accountHolder = ? WHERE iddeposits = ?",[account.bankName,account.principalAmt,account.startDate,account.noOfMonths,account.roi,account.endDate,account.maturityAmt,account.repayAccount,account.accountHolder,account.iddeposits],function(err,result){
        if(err) throw err;
        res.sendStatus(200);
    })
});
app.delete('/deleteAccountInDB',function(req,res){
    var accNo = req.query.param1;
    console.log(accNo);
    con.query("DELETE from deposits WHERE accNum = ?",[accNo],function(err,result){
        if(err) throw err;
        console.log(`Deleted ${result.affectedRows} row(s)`);
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    })
});

app.post('/editAccount', function (req, res) {
    fs.readFile( __dirname + "/data/accounts.json", 'utf8', function (err, data) {
        var editedAccountDetail = req.body;
        data = JSON.parse(data);
        data[req.body.id]=req.body;    
        data = JSON.stringify(data);
        fs.writeFile( __dirname + "/data/accounts.json", data, function (err) {       
            console.log( data );
            res.end( JSON.stringify(data));
        });
    });
})

app.get('/getAccountById',function(req,res){
    var accountID = req.query.param1;
    console.log(req.query.param1);
    fs.readFile( __dirname + "/data/accounts.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        var selectedAcc = {};
        for (var key in data){console.log(key+"key");
            if(key == accountID){
                selectedAcc = data[key];
                console.log(selectedAcc);
                break;
            }
        }
        res.end( JSON.stringify(selectedAcc));
    });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})