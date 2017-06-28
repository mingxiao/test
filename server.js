/**
 * Created by pivotal on 6/15/17.
 */
import express from 'express';
var app = express();
// var React = require('react');
import React from 'react';
import ReactDOMServer from 'react-dom/server';

app.get('/dist/:file', function(req, res) {
  const file = req.params['file'];
  const filepath = `${process.cwd()}/dist/${file}`;

  console.log(`Routing request ${file} to ${filepath}`);

  res.sendFile(filepath);
});

app.get('/', function (req, res) {
  console.log('hit home');
  res.send(render())
});
console.log(`listening on port 3000`);
app.listen(3000);

function render() {
  return ReactDOMServer.renderToString(
    <html>
      <head>
        <link href="./dist/app.css" type="text/css" rel="stylesheet"/>
      </head>
      <body>
        <div id="root">
        </div>
        <script src="./dist/app.js"></script>
      </body>
    </html>
  );
}
