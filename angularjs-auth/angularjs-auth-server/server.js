var express = require('express');
var app = express();
var jwt = require('express-jwt');//node middleware
var jwks = require('jwks-rsa');
var cors =require('cors');

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://anushka-cd.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://anushka-cd.us.com/api',
    issuer: 'https://anushka-cd.us.auth0.com/',
    algorithms: ['RS256']
});
app.use(cors());
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    //res.send('Secured Resource');
    res.json({message:'This is a secure endpoint'});
});

app.listen(port);
console.log('Server running on localhost:8080');
