let express = require('express');
let app = express();
let session = require('express-session');
let bodyParser = require('body-parser');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set-up where the files are being located 
app.use(express.static('public'));

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/public/pages/index.html');
});

app.set('port', 8000);

app.listen(app.get('port'), () => {
    console.log('Node.js/Express is listening on port ' + app.get('port'));
});
