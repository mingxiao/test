/**
 * Created by pivotal on 6/15/17.
 */
var express = require('express');
var app = express();
import ReactDOMServer from 'react-dom/server';

app.get('/', function (req, res) {
  res.send(render())
});

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
  )
}