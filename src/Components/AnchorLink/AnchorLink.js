import React from "react";
import { Link } from "react-router-dom";

const AnchorLink = (props) => {
  const { href, clicked } = props;
  return clicked ? (
    <Link to={href} onClick={(event) => clicked(event, href)}>
      {props.children}
    </Link>
  ) : (
    <Link to={href}>{props.children}</Link>
  );
};

export default AnchorLink;
