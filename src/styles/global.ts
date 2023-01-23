import {createGlobalStyle} from "styled-components"
import "normalize.css"

export const GlobalStyle = createGlobalStyle`



:root {

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

  --container-background-color: #F5F7FA;
  --wrapper-primary-color: #FFFFFF;
  --wrapper-secondary-color: #D1DCE32E;
  --wrapper-border-color: #D1DCE3;
  --input-border-color: #DDE6E9;
  --input-selected-color: #66AFE9;

  --title-color: #656565;
  --title-secondary-color: #3D75BB;
  --text-color: #656565;
  --text-secondary-color: #5D9CEC;
  --text-info-color: #CECECE;
  
  
  font-family: 'Source Sans Pro', sans-serif;
}

html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`

