import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalstyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    background-color: rgba(20, 20, 20, 1);
    padding: 80px 30px 50px 30px;
    color: white;
  }
`
export default globalstyles;