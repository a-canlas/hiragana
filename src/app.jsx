import React from 'react';
import Input from './input';
import Display from './display';

class App extends React.Component {
  render() {
    return (
      <div>
        <Display />
        <Input />
      </div>
    );
  }
}

export default App;
