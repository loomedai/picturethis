
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const multer = require('multer');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

  
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage });

// database connections

const db = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'solutionsdb',
 //     host:'remotemysql.com',
 //     user: 'YV7hmbfNlq',
 //     password: 'y14XO122ar',
 //     database: 'YV7hmbfNlq',
      port: 3308
});
 
// check database connection 

db.connect(err=>{
    if (err){console.log(err,'dberr');}
    console.log('GSdatabase is connected');
})


//get all datasX

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

// user posts

app.get('/user/:id/posts',(req,res)=>{

    const uID = req.params.id;

    let qry = `select * from posts where uID = ${uID}`;

    
    db.query(qry,(err,result)=>{

        if(err) {console.log(err);}

        if(result.length>0)
        {
            res.send({
                message: 'get all User post',
                data:result
            });
        }
        else 
        {
            res.send({
                message:'posts not available'
            });
        }
    })
})

// image get

app.get('/posts/:img',(req,res)=>{

    let typeI = req.params.img;

    let qry = `select * from posts where img = ${typeI}`;

    db.query(qry,(err,result)=>{

        if(err) {console.log(err);}

        if(result.length>0)
        {
            res.send({
                message: 'get single data from img',
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

// Update a single post. for update we use put
app.put('/posts/:id',(req,res)=>{

    console.log(req.body,'updatepost');

    let pID = req.params.id;
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
//image
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send({
  message:"File uploaded successfully"
  }
  )
});

app.listen(3000,() => {
    console.log("Server is still running :");
})