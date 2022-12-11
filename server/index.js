const express = require  ('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');


const app = express();

app.use(cors());
app.use(bodyparser.json());



// database connection

const db = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'solutionsdb',
 //     host:'remotemysql.com',
 //     user: 'YV7hmbfNlq',
 //     password: 'y14XO122ar',
 //     database: 'YV7hmbfNlq',
      port: 3306
});
 
// check database connection 

db.connect(err=>{
    if (err){console.log(err,'dberr');}
    console.log('YV7hmbfNlq is connected');
})


//get all data

app.get('/posts',(req,res)=>{

    let qry = `select * from posts`;

    db.query(qry,(err,result)=>{

        if(err)
        {
            console.log(err,'errs')
        }

        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            })
        }

    });
})

app.get('/posts/:id',(req,res)=>{

    let pID = req.params.id;

    let qry = `select * from posts where id = ${pID}`;

    db.query(qry,(err,result)=>{

        if(err) {console.log(err);}

        if(result.length>0)
        {
            res.send({
                message: 'get single data from id',
                data:result
            });
        }
        else 
        {
            res.send({
                message:'data not available'
            });
        }
    })

});
// GET CATEGORY
app.get('/posts/:category',(req,res)=>{

    let typeC = req.params.category;

    let qry = `select * from posts where category = ${typeC}`;

    db.query(qry,(err,result)=>{

        if(err) {console.log(err);}

        if(result.length>0)
        {
            res.send({
                message: 'get single data from category',
                data:result
            });
        }
        else 
        {
            res.send({
                message:'data not available'
            });
        }
    })

});
// create post

app.post('/posts',(req,res)=>{

    console.log(req.body,'createpost');

    let title = req.body.title;
    let descr = req.body.description;
    let img = req.body.img;
    let typeC = req.body.category;

    let qry = `insert into posts(title,description,img, category) values("${title}","${descr}","${img}", "${typeC}")`;

    db.query(qry,(err,result)=>{

        if(err){console.log(err);}
        console.log(result,'result')
        res.send({
            message:'data has been send with new if statement'
        })

    });

})

// create user?? skal vi have det?


// Update a single post. for update we use put
app.put('/posts/:id',(req,res)=>{

    console.log(req.body,'updatepost');

    let pID = req.params.id
    let title = req.body.title;
    let descr = req.body.description;
    let img = req.body.img;
    let typeC = req.body.category;

    let qry = `update posts set title = "${title}", description = "${descr}", img = "${img}", category = "${typeC}" where id = ${pID}`;

    db.query(qry,(err,result)=>{

        if(err) {console.log(err);}

        res.send({
            message:'post updated'
        });

    });

})

// delete a post
app.delete('/posts/:id',(req,res)=>{

    let pID = req.params.id;

    let qry = `delete from posts where id = "${pID}"`;
    db.query(qry,(err,result)=>{
        if(err) {console.log(err);}

        res.send(
            {
                message:'post deleted'
            }
        )

    });
})

app.listen(3000,() => {
    console.log("Server is still running :");
})