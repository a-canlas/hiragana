import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   letters: ''
    // };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    // this.setState({ [name]: value });
    this.props.grab(value);
  }

  render() {
    return (
      <div className="input-div">
        <input type="text" name="letters" onChange={this.handleChange} placeholder="Type something here"></input>
      </div>
    );
  }
}

export default Input;
