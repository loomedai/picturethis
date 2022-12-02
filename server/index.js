const express = require  ('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');


const app = express();

app.use(cors());
app.use(bodyparser.json());



// database connection

const db = mysql.createConnection({
    host:'remotemysql.com',
    user: 'YV7hmbfNlq',
    password: 'y14XO122ar',
    database: 'YV7hmbfNlq',
    port: 3306
});

// check database connection 

db.connect(err=>{
    if (err){console.log(err,'dberr');}
    console.log('solutionsdb is connected');
})


//get all data

app.get('/posts',(req,res)=>{

    let qr = `select * from posts`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs')
        }

    });
})





app.listen(3000,() => {
    console.log("Server is still running :");
})