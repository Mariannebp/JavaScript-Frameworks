import React from "react";
import * as n from "../styled/404";

/**
 * Creates the content of the 404 page
 */
function NotFoundContent() {
  return (
    <n.NotFoundContainer>
      <n.NotFoundHeading>Sorry, the page you're looking for doesn't seem to exist...</n.NotFoundHeading>
    </n.NotFoundContainer>
  )
}

export default NotFoundContent;