import React from "react";

const Footer = (props) => {
  return (
    <div className="container footer">
      Made with&nbsp;
      <a target="blank" href="https://fr.reactjs.org/">
        React&nbsp;
      </a>
      at&nbsp;
      <a target="blank" href="https://www.lereacteur.io/">
        Le Reacteur&nbsp;
      </a>
      By&nbsp;
      <a target="blank" href="https://www.linkedin.com/in/matis-grinbaum/">
        {props.creator}
      </a>
    </div>
  );
};

export default Footer;
