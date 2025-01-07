require('dotenv').config({path:'../.env'});
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();

app.use(cors());



const db= mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});

app.get("/",(re,res)=> {
    return res.json("From backend side");
});

app.get('/test',(req,res)=> {
    const sql = "Select * FROM test";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});
app.listen(process.env.DB_PORT,()=>{
    console.log("listening");
});
