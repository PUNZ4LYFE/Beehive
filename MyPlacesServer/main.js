var http = require('http');
var url = require('url');
var fs = require('fs');
const path = require('path');
var uniqid = require('uniqid');

var port = 3000;
var localhost = 'localhost';

var server = http.createServer((request, response) => {
    var parseUrl = url.parse(request.url, true);
    var path = parseUrl.pathname;
    path = path.replace(/^\/+|\/+$/g, '');
    var method = request.method;

    var query = parseUrl.query;
    var headers = request.headers;

    switch (path) {
        case 'data':
            switch (method) {
                case 'OPTIONS':
                    respondToOptions(request, response);
                    break;

                case 'GET':
                    getData(request, response);
                    break;

                case 'POST':
                    updateJsons(request, response);
                default:
                    send404(request, response);
                    break;
            }
            break;

        case 'categories':
            switch (method) {
                case 'OPTIONS':
                    respondToOptions(request, response);
                    break;

                case 'GET':
                    getCategories(request, response);
                    break;

                case 'POST':
                    updateJsonsCategories(request, response);
                    break;

                default:
                    send404(request, response);
                    break;
            }
            break;
    }
});


server.listen(port, localhost, function () {
    console.log('El servidor está corriendo :3');
});


function getData(request, response) {
    setResponseHeaders(request, response);
    loadData().then(function (users) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(users));
        response.end();
    }).catch(function () {
        send404(request, response)
    });
}

function loadData() {
    return new Promise(loadDataPromiseExecuter);
}

function loadDataPromiseExecuter(resolve, reject) {
    fs.readFile(path.resolve(process.cwd(), './data/data.json'), function (err, data) {
        if (err) {
            reject();
        } else {
            var newData = JSON.parse(data);
            resolve(newData);
        }
    });
}







function getCategories(request, response) {
    console.log('pls');
    setResponseHeaders(request, response);
    loadCategories().then(function (users) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(users));
        response.end();
    }).catch(function () {
        send404(request, response)
    });
}

function loadCategories() {
    return new Promise(loadCategoriesPromiseExecuter);
}

function loadCategoriesPromiseExecuter(resolve, reject) {
    fs.readFile(path.resolve(process.cwd(), './data/data.json'), function (err, data) {
        if (err) {
            reject();
        } else {
            var newData = JSON.parse(data);
            resolve(newData);
        }
    });
}












function setResponseHeaders(request, response) {

    var origin = '*';
    if (request.headers['origin']) {
        origin = request.headers['origin'];
    }

    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    if (request.headers['content-type']) {
        response.setHeader('Content-Type', request.headers['content-type'])
    }
    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Access-Control-Allow-Methods, Content-Type');
}

function send404(request, response) {
    setResponseHeaders(request, response);
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end();
}

function respondToOptions(request, response) {
    setResponseHeaders(request, response);
    response.writeHead(200);
    response.end();
}




function updateJsons(request, response) {
    setResponseHeaders(request, response);
    let buffer = [];
    let objeto = null;

    request.on('data', function (chunk) {
        buffer.push(chunk);
    });

    request.on('end', function () {
        buffer = Buffer.concat(buffer).toString();
        objeto = JSON.parse(buffer);
        //console.log(objeto);
        saveJsons(objeto);
    });
}

function saveJsons(objeto) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path.resolve(process.cwd(), './newData/venues.json'), JSON.stringify(objeto), function (err) {
            if (err) {

            } else {
                resolve();
            }
        })
    });
}














function updateJsonsCategories(request, response) {
    setResponseHeaders(request, response);
    let buffer = [];
    let objeto = null;

    request.on('data', function (chunk) {
        buffer.push(chunk);
    });

    request.on('end', function () {
        buffer = Buffer.concat(buffer).toString();
        objeto = JSON.parse(buffer);
        //console.log(objeto);
        saveJsonCategories(objeto);
    });
}

function saveJsonCategories(objeto) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path.resolve(process.cwd(), './newData/categories.json'), JSON.stringify(objeto), function (err) {
            if (err) {

            } else {
                resolve();
            }
        })
    });
}