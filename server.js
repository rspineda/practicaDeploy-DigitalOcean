const express = require('express')
const path = require('path')
const argv = require('optimist').argv
const app = express()

app.get('/', (req, res)=>{
    console.log('Respondiendo en el puerto: ', argv.port)
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, ()=>{
    console.log('server on port ', argv.port)
})