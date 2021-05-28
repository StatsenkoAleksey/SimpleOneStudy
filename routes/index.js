const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  database: 'postgres',
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  port: 5432
});

router.get('/', function(req, res) {
  
  res.render('welcom');
});

router.get('/users', async function(req, res) {

  const client = await pool.connect();
  
  const result = await client.query(
    'SELECT * FROM "user"'
    );
  
  res.send(result.rows);
});

router.get('/users/:id', async function(req, res) {

  const client = await pool.connect();
  
  const result = await client.query(
    'SELECT * FROM "user" WHERE id = $1', [parseInt(req.params.id)]);
  
  res.send(result.rows);
});

router.post('/users', async function(req, res){
  
  const client = await pool.connect();

  const { name } = req.body;
  const { rows } = await client.query(
    'INSERT INTO "user" (name) VALUES ($1)', [name]
    );

    res.status(200).send({ message: 'User Added Successfully!' });
});

router.put('/users/:id', async function(req, res) {

  const client = await pool.connect();

  const { name } = req.body;
  const result = await client.query(
    'UPDATE "user" SET name = $1 WHERE id = $2',
    [name, parseInt(req.params.id)]
  );

  res.status(200).send({ message: 'User Updated Successfully!' });
});

router.delete('/users/:id', async function(req, res) {

  const client = await pool.connect();
  
  const result = await client.query(
    'DELETE FROM "user" WHERE id = $1', [parseInt(req.params.id)]);
  
    res.status(200).send({ message: 'User Deleted Successfully!' });
});

module.exports = router;