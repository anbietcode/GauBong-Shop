const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'doan'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const sql = "INSERT INTO products (`name`, `price`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.price
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.put('/update/:id', (req, res) => {
    const sql = `UPDATE products SET name = ? , price = ? WHERE id = ?`;
    const values = [
        req.body.name,
        req.body.price
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.delete('/products/:id', (req, res) => {
    const sql = `DELETE FROM products WHERE id = ?`;
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});



app.listen(5003, () => {
    console.log("Running");
})
