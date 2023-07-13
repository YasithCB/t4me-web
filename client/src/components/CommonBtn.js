import React from "react";
import Button from "react-bootstrap/Button";

const CommonBtn = (props) => {
  return (
    <>
      <Button className="btn-blue"> {props.text} </Button>
    </>
  );
};

export default CommonBtn;
