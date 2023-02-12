const APP       = require('express')();
const PORT      = 8080;


var data = {
        'obj': [
            {'id': 1, 'val': 11},
            {'id': 2, 'val': 22},
            {'id': 3, 'val': 33}
        ]
    }


APP.get('/', function (req, res) {
    res.header({'Access-Control-Allow-Origin': '*'});
    res.send(data);
    console.log('Recieved a GET request. Responding with: ' + JSON.stringify(data));
})


APP.listen(
    PORT,
    () => console.log('Listening..')
);

