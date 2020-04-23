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
    while (abc.length > 0) {
      if (abc[0] === 'a') {
        converted += '\u3042';
        abc.splice(0, 1);
      } else if (abc[0] === 'e') {
        converted += '\u3048';
        abc.splice(0, 1);
      } else if (abc[0] === 'i') {
        converted += '\u3044';
        abc.splice(0, 1);
      } else if (abc[0] === 'o') {
        converted += '\u304A';
        abc.splice(0, 1);
      } else if (abc[0] === 'u') {
        converted += '\u3046';
        abc.splice(0, 1);
      } else {
        converted += abc[0];
        abc.splice(0, 1);
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
