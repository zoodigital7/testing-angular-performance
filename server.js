
//Install express server
const express = require('express');
const enforce = require('express-sslify');
const path = require('path');
const compression = require('compression');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angularEight'));

app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(compression()) //compressing dist folder 

app.get('/*', function(req, res) {
    
res.sendFile(path.join(__dirname+'/dist/angularEight/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);