import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <input type="text" name="letters" value={this.state.letters} onChange={this.handleChange} placeholder="Type something here"></input>
    );
  }
}

export default Input;
