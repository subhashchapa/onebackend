const express = require('express')   //same as "import express from "express" "
require('dotenv').config() 
const app = express()   // we are storing in express variable
const port = 4000       //virtual port free

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/subhash', (req, res) => {
  res.send('nenu subhash ni em kavalo cheppu')
})
app.get('/iitg', (req, res) => {
  res.send('<h1> nuvvu IITG lo vunnavu </h1>')
})
app.get('/google', (req, res) => {
  res.send('<p><i>nuvvu google lo vunnavu!</i></p>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
