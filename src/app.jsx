import React from 'react';
import Input from './input';
import Display from './display';
import Heading from './heading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: ''
    };
    this.convertCharacters = this.convertCharacters.bind(this);
  }

  convertCharacters(letters) {
    this.setState({ characters: letters });
  }

  render() {
    return (
      <div className="container">
        <Heading />
        <Display displayVal={this.state.characters}/>
        <Input grab={this.convertCharacters}/>
      </div>
    );
  }
}

export default App;
