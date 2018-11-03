const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');

const expresshbs = require('express-handlebars');

const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/Velocity');

app.engine('.hbs', expresshbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


//app Listen
app.listen('3000',()=>{
    
    console.log( "🤖  app listenning on http://localhost:3000")

})

