import React from 'react';

const Choice = (props) => {
  return (
    <>
    <label>
      <input
        name={props.name}
        type="checkbox"
        value={props.value}
        onChange={props.onChange}
      ></input>
      <span>{props.label}</span>
    </label>
    </>
  );
};

export default Choice;
