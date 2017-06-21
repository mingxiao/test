/**
 * Created by pivotal on 6/15/17.
 */
import express from 'express';
var app = express();
// var React = require('react');
import React from 'react';
import ReactDOMServer from 'react-dom/server';

app.get('/', function (req, res) {
  res.send(render())
});
console.log(`listening on port 3000`);
app.listen(3000);

function render() {
  return ReactDOMServer.renderToString(
    <html>
      <body>
        <div id="root">
        </div>
        <script src="./dist/app.js"></script>
      </body>
    </html>
  );
}