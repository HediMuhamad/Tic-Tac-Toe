const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use('/node_modules/@fontawesome/',express.static(__dirname + 'node_modules/@fontawesome/'));
app.use('/node_modules/jquery/dist',express.static(__dirname + '/node_modules/jquery/dist'));

app.get('/',(req, res)=>{
    res.render('index',{});
})

const PORT = process.env.PORT || 5566;
app.listen(PORT, ()=>{
    console.log(`Now server is running in port: ${PORT}`);
})