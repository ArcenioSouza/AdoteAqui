import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: sans-serif;
  }
  
  body {
    width: 100%;
    background: #CEF6E3;
  }

  :root{
     --primary: #CEF6E3;
     --secondary: #A3C2B3;
     --third: #3F755C;
  }

`;