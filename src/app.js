var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component{
  render() {
    return (<div>foo</div>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));