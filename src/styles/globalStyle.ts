import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0; 
    padding: 0; 
    background-color: ${({ theme }) => theme.colors.dark[900]};
    font-family: ${({ theme }) => theme.fonts.body};
  }
 
  button {
  cursor: pointer;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Marvel', sans-serif;
  border: 1px solid transparent;
  color:${({ theme }) => theme.colors.light[500]};
}
`;

export default GlobalStyle;
