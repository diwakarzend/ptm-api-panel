import React from "react";
import { Link } from "react-router-dom";

const AnchorLink = (props) => {
  const { href } = props;
  return <Link to={href}>{props.children}</Link>;
};

export default AnchorLink;
