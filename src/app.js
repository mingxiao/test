import React from 'react';
import ReactDOM from 'react-dom';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pui-react-buttons';


class App extends React.Component{
  render() {
    return (<div>
      <DefaultButton > Button </DefaultButton>
      foo</div>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
