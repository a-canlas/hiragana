import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.convert = this.convert.bind(this);
  }

  convert() {
    let abc = this.props.displayVal;
    abc = abc.toLowerCase().split('');
    let converted = '';
    for (let i = 0; i < abc.length; i++) {
      if (abc[i] === 'a') {
        converted += '\u3042';
      } else if (abc[i] === 'e') {
        converted += '\u3048';
      } else if (abc[i] === 'i') {
        converted += '\u3044';
      } else if (abc[i] === 'o') {
        converted += '\u304A';
      } else if (abc[i] === 'u') {
        converted += '\u3046';
      }
    }
    return converted;
  }

  render() {
    return (
      this.props.displayVal.length === 0 ? <h2>Type something in...</h2> : <h2>{this.convert()}</h2>
    );
  }
}

export default Display;
