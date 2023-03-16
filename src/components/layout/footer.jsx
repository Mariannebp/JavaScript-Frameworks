import React from "react";
import FooterContainer from "../styled/footerContainer";
import FooterSignature from "../styled/footerSignature";
import Paragraph from "../styled/paragraph";

function Footer() {
  return (
    <FooterContainer>
      <Paragraph>You've reached the bottom..</Paragraph>
      <Paragraph>Now, get up there and continue shopping!</Paragraph>
      <FooterSignature>© 2023 Marianne Bjerløv Pedersen</FooterSignature>
    </FooterContainer>
  )
}

export default Footer;