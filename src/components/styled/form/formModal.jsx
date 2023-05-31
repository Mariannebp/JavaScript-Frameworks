import styled from "styled-components";

export const FormModal = styled.div`
width: 350px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
padding: 10px;
background-color: var(--color-background);
border: 2px solid var(--color-border);
border-radius: 5px;
box-shadow: 0 0 0 100vmax rgba(0,0,0,.3);

@media (min-width: 351px) and (max-width: 700px) {
    width: 300px;
  }

  @media (max-width: 350px) {
    width: 210px;
  }
`;