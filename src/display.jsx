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
        if (converted[converted.length - 1] === 'h') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u306F';
        } else if (converted[converted.length - 1] === 'b') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3070';
        } else if (converted[converted.length - 1] === 'p') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3071';
        } else if (converted[converted.length - 1] === 'n') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u306A';
        } else if (converted[converted.length - 1] === 'r') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3089';
        } else if (converted[converted.length - 1] === 'm') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u307E';
        } else if (converted[converted.length - 1] === 'k') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u304B';
        } else if (converted[converted.length - 1] === 'g') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u304C';
        } else if (converted[converted.length - 1] === 's') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3055';
        } else if (converted[converted.length - 1] === 'z') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3056';
        } else if (converted[converted.length - 1] === 't') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u305F';
        } else if (converted[converted.length - 1] === 'd') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3060';
        } else if (converted[converted.length - 1] === 'w') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u308F';
        } else if (converted[converted.length - 1] === 'y') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3084';
        } else {
          converted += '\u3042';
        }
        abc.splice(0, 1);
      } else if (abc[0] === 'e') {
        if (converted[converted.length - 1] === 'h') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3078';
        } else if (converted[converted.length - 1] === 'b') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3079';
        } else if (converted[converted.length - 1] === 'p') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u307A';
        } else if (converted[converted.length - 1] === 'n') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u306D';
        } else if (converted[converted.length - 1] === 'r') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u308C';
        } else if (converted[converted.length - 1] === 'm') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3081';
        } else if (converted[converted.length - 1] === 'k') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3051';
        } else if (converted[converted.length - 1] === 'g') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3052';
        } else if (converted[converted.length - 1] === 's') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u305B';
        } else if (converted[converted.length - 1] === 'z') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u305C';
        } else if (converted[converted.length - 1] === 't') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3066';
        } else if (converted[converted.length - 1] === 'd') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3067';
        } else {
          converted += '\u3048';
        }
        abc.splice(0, 1);
      } else if (abc[0] === 'i') {
        if (converted[converted.length - 1] === 'h') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3072';
        } else if (converted[converted.length - 1] === 'b') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3073';
        } else if (converted[converted.length - 1] === 'p') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3074';
        } else if (converted[converted.length - 1] === 'n') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u306B';
        } else if (converted[converted.length - 1] === 'r') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u308A';
        } else if (converted[converted.length - 1] === 'm') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u307F';
        } else if (converted[converted.length - 1] === 'k') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u304D';
        } else if (converted[converted.length - 1] === 'g') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u304E';
        } else if (converted[converted.length - 1] === 's') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3057';
        } else if (converted[converted.length - 1] === 'z') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3058';
        } else if (converted[converted.length - 1] === 't') {
          converted = converted.slice(0, converted.length - 1);
          converted += '\u3061';
        } else {
          converted += '\u3044';
        }
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
