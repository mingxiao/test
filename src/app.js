import React from 'react';
import ReactDOM from 'react-dom';
import {DefaultButton} from 'pui-react-buttons';
import {Icon} from 'pui-react-iconography';
import Header from './components/header';
require("./test.scss");

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("message", this.handleFrameTasks);
  }
  componentWillUnmount() {
    window.removeEventListener("message", this.handleFrameTasks);
  }
  handleFrameTasks(e) {
    console.log('localhost:3000', e);
  };

  render() {
    return (
      <div className="test">
        <div className="foo child">foo</div>
        <div className="bar child">bar</div>
        <DefaultButton className="default child" onClick={() => alert('foo')}>Default</DefaultButton>
        <Icon className="child icon" src="add"/>
        <Header />
        <a onClick={() => window.parent.postMessage({msg: "POLO",  provider: 'scaling'}, "*")} > Send Polo</a>
        <a onClick={() => window.parent.postMessage(this.handleFrameTasks, "*")} > Send func</a>
        <br/>
        <iframe src="https://enable-cors.org/"/>
      </div>
    );
  }
}

module.exports = App;

ReactDOM.render(<App />, document.getElementById('root'));
