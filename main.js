

const APP       = require('express')();
const PORT      = 8080;


var data = {
    containers: 
    [
        {
            name: "Container One",
            item: {
                name: "Item 1",
                date: "1-1-23",
                description: "testing..",
                records: [
                    {
                        name: "record1",
                        date: "1-1-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    },
                    {
                        name: "record2",
                        date: "1-2-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    },
                    {
                        name: "record3",
                        date: "1-3-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    },
                    {
                        name: "record4",
                        date: "1-4-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    }
                ]
            }
            
        },
        {
            name: "Container Two",
            item: {
                name: "Item 2",
                date: "1-1-23",
                description: "testing..",
                records: [
                    {
                        name: "record1",
                        date: "1-1-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    },
                    {
                        name: "record2",
                        date: "1-2-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    },
                    {
                        name: "record3",
                        date: "1-3-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    },
                    {
                        name: "record4",
                        date: "1-4-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    }
                ]
            }
        },
        {
            name: "Container Three",
            item: {
                name: "Item 3",
                date: "1-1-23",
                description: "testing..",
                records: [
                    {
                        name: "record1",
                        date: "1-1-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    },
                    {
                        name: "record2",
                        date: "1-2-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    },
                    {
                        name: "record3",
                        date: "1-3-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    },
                    {
                        name: "record4",
                        date: "1-4-23",
                        data1: 1,
                        data2: 2,
                        data3: 3
                    }
                ]
            }
        }
    ]
}


APP.get('/', function (req, res) {
    var obj;
    res.header({'Access-Control-Allow-Origin': '*'});
    
    if (typeof req.query.length !== "undefined") {
        if (req.query.length === '*') {
            obj = data;
        }
        else {
            try {
                var length = Number(req.query.length);
                if (length != 0) {
                    obj = {'containers': data.containers.slice(0, length)};
                }
                else {
                    obj = {'containers': [data.containers[0]]}
                }
            }
            catch {
                obj = {'containers': [data.containers[0]]}
            }
        }
    }
    else {
        obj = {'containers': [data.containers[0]]}
    }
    res.send(obj);

    console.log(req.query);
    console.log('Recieved a GET request. Responding with: ' + JSON.stringify(obj));
})


// APP.post('/', function(req, res) {
//     console.log(req.body);
//     data.obj.push(req.body);
//     res.send('recieved');
// })


APP.listen(
    PORT,
    () => console.log('Listening..')
);

