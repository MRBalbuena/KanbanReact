var express = require('express');
var app = express();

app.set("view options", {layout: false});
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(8000, () => {
    console.log('listening on port 8000');
})