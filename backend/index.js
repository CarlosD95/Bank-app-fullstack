// Import Dependencies

const express = require("express")
const cors = require("cors")
const bodyParser = require ("body-parser")
const mysql = require ("mysql2")

// Create object from express

const app = express();

// Tell what our app to use 

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true})) 


// run our API on port 4000

app.listen(4000, ()=>{
    console.log('API is run')
})

// connect database with project 

const db = mysql.createPool({
    host:"localhost",
    user: 'root',
    password: '',
    database: 'localdb'
})

// Get users API

app.get("/getall", (req, res) => {
    const getAllUsers = "SELECT * FROM users_table"
    db.query(getAllUsers, (err, result) => {
        if(!err){
            res.send(result)
        } else {
            console.error(err)
        }
    })
})

// API add Users POST 

app.post("/add", (req, res) => {
    const {name, email, phone, dni, password} = req.body;
    const addQuery = "INSERT INTO users_table (name, email, phone, dni, password) VALUES (?,?,?,?,?)"  
    db.query(addQuery, [name,email,phone,dni,password], (err, result)=> {
        if(!err){
            res.send('Add User Success')
        } else{
            console.error(err)
        }
    })
})

app.post('/login', (req, res) => {

  let dni = req.body.dni; 
  let password = req.body.password; 
  const addQuery = 'SELECT * FROM users_table WHERE dni = ? AND password = ?'
  db.query(addQuery,[ dni, password ], (err, result) => {
    if(err){
        res.send({err:err});
    }
    
    if(result.length>0){
        res.send(result);
    }else{
        res.send({message: "User not exists"});
    }
  })
});

// API to get single USER 

app.get("/get/:dni", (req, res) => {
    const dni = req.params.dni; 
    const getSingleUser = 'SELECT * FROM users_table WHERE dni = ?'
    db.query(getSingleUser,[dni], (err, result) => {
        if (!err){
            res.send(result);
        } else {
            res.send('User not found');
        }
    })
})

// API to Update User PUT

app.put("/update/:dni", (req, res) => {
    const dni = req.params.dni;
    const {name, email, phone, password, balance} = req.body;
    const updateQuery = "UPDATE users_table SET name = ?, email = ?, phone = ?, password = ?, balance = ?  WHERE dni = ?"
    db.query(updateQuery, [name, email, phone, dni, password, balance], (err, result) => {
        if(!err){
            res.send(result)
        } else {
            console.log(err)
        }
    })
})

// API to Delete USER to DELETE

app.delete("/delete/:dni", (req, res) => {
    const dni = req.params.dni; 
    const deleteQuery = "DELETE from users_table WHERE dni = ?"
    db.query(deleteQuery,[dni], (err, result) => {
        if (!err){
            res.send('User Delete Success');
        } else {
            res.send('Hasnt been deleted: try again')
        }
    })
})




