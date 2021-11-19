const express = require('express');
const app = express();

const request = require('request');

app.set('view engine', 'ejs');

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use('/node_modules/@fontawesome/',express.static(__dirname + 'node_modules/@fontawesome/'));
app.use('/node_modules/jquery/dist',express.static(__dirname + '/node_modules/jquery/dist'));


var funFactMessage = '';


var api = {
    method: 'GET',
    url: 'https://catfact.ninja/fact'
  };

app.get('/',(req, res)=>{  
    
    request(api, function (error, response, body) {
        if (error) throw new Error(error);
        funFactMessage=JSON.parse(body).fact;
    });

    res.render('index',{funFactMessage: funFactMessage});
})

const PORT = process.env.PORT || 5566;
app.listen(PORT, ()=>{
    console.log(`Now server is running in port: ${PORT}`);
})