import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body, *, *::before, *::after{
  padding:0;
  margin:0;
  font-family: 'Montserrat';
  box-sizing:border-box;
}`

export default GlobalStyle;