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
      const len = converted.length;
      if (abc[0] === 'a') {
        if (converted[len - 1] === 'h') {
          converted = converted.slice(0, len - 1);
          converted += '\u306F';
        } else if (converted[len - 1] === 'b') {
          converted = converted.slice(0, len - 1);
          converted += '\u3070';
        } else if (converted[len - 1] === 'p') {
          converted = converted.slice(0, len - 1);
          converted += '\u3071';
        } else if (converted[len - 1] === 'n') {
          converted = converted.slice(0, len - 1);
          converted += '\u306A';
        } else if (converted[len - 1] === 'r') {
          converted = converted.slice(0, len - 1);
          converted += '\u3089';
        } else if (converted[len - 1] === 'm') {
          converted = converted.slice(0, len - 1);
          converted += '\u307E';
        } else if (converted[len - 1] === 'k') {
          converted = converted.slice(0, len - 1);
          converted += '\u304B';
        } else if (converted[len - 1] === 'g') {
          converted = converted.slice(0, len - 1);
          converted += '\u304C';
        } else if (converted[len - 1] === 's') {
          converted = converted.slice(0, len - 1);
          converted += '\u3055';
        } else if (converted[len - 1] === 'z') {
          converted = converted.slice(0, len - 1);
          converted += '\u3056';
        } else if (converted[len - 1] === 't') {
          converted = converted.slice(0, len - 1);
          converted += '\u305F';
        } else if (converted[len - 1] === 'd') {
          converted = converted.slice(0, len - 1);
          converted += '\u3060';
        } else if (converted[len - 1] === 'w') {
          converted = converted.slice(0, len - 1);
          converted += '\u308F';
        } else if (converted[len - 1] === 'y') {
          converted = converted.slice(0, len - 1);
          converted += '\u3084';
        } else {
          converted += '\u3042';
        }
        abc.splice(0, 1);
      } else if (abc[0] === 'e') {
        if (converted[len - 1] === 'h') {
          converted = converted.slice(0, len - 1);
          converted += '\u3078';
        } else if (converted[len - 1] === 'b') {
          converted = converted.slice(0, len - 1);
          converted += '\u3079';
        } else if (converted[len - 1] === 'p') {
          converted = converted.slice(0, len - 1);
          converted += '\u307A';
        } else if (converted[len - 1] === 'n') {
          converted = converted.slice(0, len - 1);
          converted += '\u306D';
        } else if (converted[len - 1] === 'r') {
          converted = converted.slice(0, len - 1);
          converted += '\u308C';
        } else if (converted[len - 1] === 'm') {
          converted = converted.slice(0, len - 1);
          converted += '\u3081';
        } else if (converted[len - 1] === 'k') {
          converted = converted.slice(0, len - 1);
          converted += '\u3051';
        } else if (converted[len - 1] === 'g') {
          converted = converted.slice(0, len - 1);
          converted += '\u3052';
        } else if (converted[len - 1] === 's') {
          converted = converted.slice(0, len - 1);
          converted += '\u305B';
        } else if (converted[len - 1] === 'z') {
          converted = converted.slice(0, len - 1);
          converted += '\u305C';
        } else if (converted[len - 1] === 't') {
          converted = converted.slice(0, len - 1);
          converted += '\u3066';
        } else if (converted[len - 1] === 'd') {
          converted = converted.slice(0, len - 1);
          converted += '\u3067';
        } else {
          converted += '\u3048';
        }
        abc.splice(0, 1);
      } else if (abc[0] === 'i') {
        if (converted[len - 2] === 's' && converted[len - 1] === 'h') {
          converted = converted.slice(0, len - 2);
          converted += '\u3057';
        } else if (converted[len - 2] === 'c' && converted[len - 1] === 'h') {
          converted = converted.slice(0, len - 2);
          converted += '\u3061';
        } else if (converted[len - 1] === 'h') {
          converted = converted.slice(0, len - 1);
          converted += '\u3072';
        } else if (converted[len - 1] === 'b') {
          converted = converted.slice(0, len - 1);
          converted += '\u3073';
        } else if (converted[len - 1] === 'p') {
          converted = converted.slice(0, len - 1);
          converted += '\u3074';
        } else if (converted[len - 1] === 'n') {
          converted = converted.slice(0, len - 1);
          converted += '\u306B';
        } else if (converted[len - 1] === 'r') {
          converted = converted.slice(0, len - 1);
          converted += '\u308A';
        } else if (converted[len - 1] === 'm') {
          converted = converted.slice(0, len - 1);
          converted += '\u307F';
        } else if (converted[len - 1] === 'k') {
          converted = converted.slice(0, len - 1);
          converted += '\u304D';
        } else if (converted[len - 1] === 'g') {
          converted = converted.slice(0, len - 1);
          converted += '\u304E';
        } else if (converted[len - 1] === 's') {
          converted = converted.slice(0, len - 1);
          converted += '\u3057';
        } else if (converted[len - 1] === 'z' || converted[len - 1] === 'j') {
          converted = converted.slice(0, len - 1);
          converted += '\u3058';
        } else if (converted[len - 1] === 't') {
          converted = converted.slice(0, len - 1);
          converted += '\u3061';
        } else {
          converted += '\u3044';
        }
        abc.splice(0, 1);
      } else if (abc[0] === 'o') {
        if (converted[len - 1] === 'h') {
          converted = converted.slice(0, len - 1);
          converted += '\u307B';
        } else if (converted[len - 1] === 'b') {
          converted = converted.slice(0, len - 1);
          converted += '\u307C';
        } else if (converted[len - 1] === 'p') {
          converted = converted.slice(0, len - 1);
          converted += '\u307D';
        } else if (converted[len - 1] === 'n') {
          converted = converted.slice(0, len - 1);
          converted += '\u306E';
        } else if (converted[len - 1] === 'r') {
          converted = converted.slice(0, len - 1);
          converted += '\u308D';
        } else if (converted[len - 1] === 'm') {
          converted = converted.slice(0, len - 1);
          converted += '\u3082';
        } else if (converted[len - 1] === 'k') {
          converted = converted.slice(0, len - 1);
          converted += '\u3053';
        } else if (converted[len - 1] === 'g') {
          converted = converted.slice(0, len - 1);
          converted += '\u3054';
        } else if (converted[len - 1] === 's') {
          converted = converted.slice(0, len - 1);
          converted += '\u305D';
        } else if (converted[len - 1] === 'z') {
          converted = converted.slice(0, len - 1);
          converted += '\u305E';
        } else if (converted[len - 1] === 't') {
          converted = converted.slice(0, len - 1);
          converted += '\u3068';
        } else if (converted[len - 1] === 'd') {
          converted = converted.slice(0, len - 1);
          converted += '\u3069';
        } else if (converted[len - 1] === 'w') {
          converted = converted.slice(0, len - 1);
          converted += '\u3092';
        } else if (converted[len - 1] === 'y') {
          converted = converted.slice(0, len - 1);
          converted += '\u3088';
        } else {
          converted += '\u304A';
        }
        abc.splice(0, 1);
      } else if (abc[0] === 'u') {
        if (converted[len - 2] === 't' && converted[len - 1] === 's') {
          converted = converted.slice(0, len - 2);
          converted += '\u3064';
        } else if (converted[len - 1] === 'h' || converted[len - 1] === 'f') {
          converted = converted.slice(0, len - 1);
          converted += '\u3075';
        } else if (converted[len - 1] === 'b') {
          converted = converted.slice(0, len - 1);
          converted += '\u3076';
        } else if (converted[len - 1] === 'p') {
          converted = converted.slice(0, len - 1);
          converted += '\u3077';
        } else if (converted[len - 1] === 'n') {
          converted = converted.slice(0, len - 1);
          converted += '\u306C';
        } else if (converted[len - 1] === 'r') {
          converted = converted.slice(0, len - 1);
          converted += '\u308B';
        } else if (converted[len - 1] === 'm') {
          converted = converted.slice(0, len - 1);
          converted += '\u3080';
        } else if (converted[len - 1] === 'k') {
          converted = converted.slice(0, len - 1);
          converted += '\u304F';
        } else if (converted[len - 1] === 'g') {
          converted = converted.slice(0, len - 1);
          converted += '\u3050';
        } else if (converted[len - 1] === 's') {
          converted = converted.slice(0, len - 1);
          converted += '\u3059';
        } else if (converted[len - 1] === 'z') {
          converted = converted.slice(0, len - 1);
          converted += '\u305A';
        } else if (converted[len - 1] === 't') {
          converted = converted.slice(0, len - 1);
          converted += '\u3064';
        } else if (converted[len - 1] === 'd') {
          converted = converted.slice(0, len - 1);
          converted += '\u3065';
        } else if (converted[len - 1] === 'y') {
          converted = converted.slice(0, len - 1);
          converted += '\u3086';
        } else {
          converted += '\u3046';
        }
        abc.splice(0, 1);
      } else if (abc[0] === 'n') {
        converted += '\u3093';
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
