import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.5rem;
    --spacing: 0.25rem;
  }

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

html{
  font-family: 'Roboto Mono';
}


body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
}

`

export default GlobalStyle
