import React from 'react';
import ReactDOM from 'react-dom';
import {DefaultButton} from 'pui-react-buttons';
require("./test.css");

class App extends React.Component {
  render() {
    return (
      <div className="test">
        foo
        bar
        <DefaultButton>Default</DefaultButton>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
