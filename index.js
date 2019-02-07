const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express()
const port = 3000

/* name of the mongo in the name of the service mongo */ 
mongoose.connect('mongodb://mongo:27017/myapp', {useNewUrlParser: true});




app.get('/', (req, res) => res.send('Hello dddddssss!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))