import React from "react";
import { FooterWrapper } from "./style";

const Footer = () => {
  const d = new Date();
  return (
    <FooterWrapper className="footer flex item-center space-between">
      <span>{d.getFullYear()} © INRPAY</span> 
      <span>Design & Developed By INRPAY</span>
    </FooterWrapper>
  );
};

export default Footer;
