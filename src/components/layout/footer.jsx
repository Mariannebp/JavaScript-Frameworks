import React from "react";
import * as f from "../../components/styled/footer";

/**
 * Creates the content of the footer.
 */
function Footer() {
  return (
    <f.FooterContainer>
      <p>You've reached the bottom..</p>
      <p>Now, get up there and continue shopping!</p>
      <f.FooterSignature>© 2023 Marianne Bjerløv Pedersen</f.FooterSignature>
    </f.FooterContainer>
  )
}

export default Footer;