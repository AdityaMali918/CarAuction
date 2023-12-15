require('dotenv').config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app=express();
app.use(cors());
app.use(express.json())


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.post('/signup',(req,res)=>{
    const sql="insert into buyers(`name`,`email`,`password`) values(?)";
    const values=[req.body.name,
    req.body.email,
    req.body.password];
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM buyers WHERE `email` = ? AND `password` = ?";
  
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.json({ message: "Error" });
        }
        
        if (data.length > 0) {
            console.log("User data:", data[0]);
            return res.json({ message: "Success", user: data[0] });
        } else {
            return res.json({ message: "Failure" });
        }
    });
});



app.get("/card", (req, res) => {
  const sql = "SELECT * FROM cars ";
  db.query(sql,(err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(data);
  });
});

app.get('/car/:carId', (req, res) => {
  const carId = req.params.carId;
  const query = 'SELECT * FROM cardetail WHERE card_id = ?';

  db.query(query, [carId], (err, results) => {
    if (err) {
      console.error('Error fetching car details:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'Car not found' });
    } else {
      res.json(results[0]);
    }
  });

});



  app.post('/updateBid', (req, res) => {
    const { bidAmount, buyerId, car_id } = req.body;
    const sql = 'UPDATE CARS SET `ID` = ?, `bid` = ? WHERE `car_id` = ? AND `bid` < ?';
  

    db.query(sql, [buyerId, bidAmount, car_id, bidAmount], (error, results) => {
      if (error) {
        console.error('Error updating bid:', error);
        res.status(500).json({ message: 'Error updating bid' });
      } else {
        if (results.affectedRows > 0) {
          res.json({ message: 'Bid updated successfully' });
        } else {
          res.json({ message: 'Bid was not updated. New bid is not higher than the previous bid.' });
        }
      }
    });
  });
  


app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "dist/index.html");
    res.sendFile(indexPath);
  })


    


 
// app.use((req,res)=>{
//     res.send("HEY THere");
// })

app.listen(8081,()=>{
    console.log("listening")
    
})
