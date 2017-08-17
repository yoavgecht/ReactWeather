var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
    console.log(__dirname + '/public/index.html');
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function(){
    console.log('Express server is up on port ' + PORT);
});