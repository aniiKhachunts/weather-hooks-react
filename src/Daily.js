import React from "react";

const Daily = props => {
  console.log(props);
  return (
    <article>
      <p>{props.temp}</p>
      <p>{props.description}</p>
      <p>{props.day}</p>
    </article>
  );
};
export default Daily;
