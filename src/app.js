import React from 'react';
import ReactDOM from 'react-dom';
import {DefaultButton} from 'pui-react-buttons';
import {Icon} from 'pui-react-iconography';
require("./test.scss");

class App extends React.Component {
  render() {
    return (
      <div className="test">
        <div className="foo child">foo</div>
        <div className="bar child">bar</div>
        <DefaultButton className="default child">Default</DefaultButton>
        <Icon className="child icon" src="add"/>
      </div>
    );
  }
}

module.exports = App;

ReactDOM.render(<App />, document.getElementById('root'));
