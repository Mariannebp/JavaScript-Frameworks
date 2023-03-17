import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkStyle = styled(Link)`
    margin: 10px;
    font-size: 1.1em;
    font-weight: 600;
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export default LinkStyle;