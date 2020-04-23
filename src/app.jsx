import React from 'react';
import Input from './input';
import Display from './display';

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
      <div>
        <Display displayVal={this.state.characters}/>
        <Input grab={this.convertCharacters}/>
      </div>
    );
  }
}

export default App;
