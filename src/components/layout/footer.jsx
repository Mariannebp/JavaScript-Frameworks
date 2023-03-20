import React from "react";
import FooterContainer from "../styled/footer/footerContainer";
import FooterSignature from "../styled/footer/footerSignature";

function Footer() {
  return (
    <FooterContainer>
      <p>You've reached the bottom..</p>
      <p>Now, get up there and continue shopping!</p>
      <FooterSignature>© 2023 Marianne Bjerløv Pedersen</FooterSignature>
    </FooterContainer>
  )
}

export default Footer;