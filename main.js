const APP       = require('express')();
const PORT      = 8080;


APP.get('/', function (req, res) {
    res.header({'Access-Control-Allow-Origin': '*'});
    res.send([
        {'id': 1, 'data': 11},
        {'id': 2, 'data': 22},
        {'id': 3, 'data': 33}
    ]);
    console.log('Recieved a GET request. Response: ' + res);
})

APP.listen(
    PORT,
    () => console.log('Listening..')
);

