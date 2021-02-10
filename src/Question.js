import React from 'react';
import Choice from "./Choice";

const Question = (props) => {
  return (
    <div>
      <p>{props.question}</p>
      <div className="choices">
        {
          props.choices.map((choice) => {
            return (
              <Choice
                name={choice.name}
                label={choice.label}
                key={choice.name}
                value={choice.value}
                onChange={props.onChange}
              />
            );
          })
        }
      </div>
    </div>
  )
};

export default Question;
