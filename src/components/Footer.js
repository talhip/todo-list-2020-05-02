import React from "react";

const Footer = (props) => {
  return (
    <div className="container footer">
      Made with&nbsp;
      <b>React&nbsp;</b>
      at&nbsp;
      <b>Le Reacteur&nbsp;</b>
      By&nbsp;
      <b>{props.creator}</b>
    </div>
  );
};

export default Footer;
