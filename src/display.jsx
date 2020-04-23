import React from 'react';

function Display(props) {
  return (
    props.displayVal.length === 0 ? <h2>Type something in...</h2> : <h2>{props.displayVal}</h2>
  );
}

export default Display;
