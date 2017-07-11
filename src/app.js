import React from 'react';
import ReactDOM from 'react-dom';
import {DefaultButton} from 'pui-react-buttons';
import {Icon} from 'pui-react-iconography';
require("./test.css");

class App extends React.Component {
  render() {
    return (
      <div className="test">
        foo
        bar
        <DefaultButton>Default</DefaultButton>
        <Icon src="add"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
