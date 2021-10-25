import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

/* VARIABLES */

  :root {
    --color-text: #f9f7f4;
    --color-background: #ADC7C6;
    --primary-color: #f171a2;
    --secondary-color: #FCAF45;
    --background-color: grey;
  }

/* FONTS */
  /* Regular */
@font-face {
  font-family: 'Montserrat';
  src: url("/fonts/Montserrat/Montserrat-Regular.ttf");
  font-style:normal ;
  font-weight: 400;
  font-display: swap;
}

/* Medium */
@font-face {
  font-family: 'Montserrat';
  src: url("/fonts/Montserrat/Montserrat-Medium.ttf");
  font-style:normal ;
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url("/fonts/Montserrat/Montserrat-MediumItalic.ttf");
  font-style:italic ;
  font-weight: 500;
  font-display: swap;
}

/* Bold */
  @font-face {
    font-family: 'Montserrat';
    src: url("/fonts/Montserrat/Montserrat-Bold.ttf");
    font-style:normal ;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url("/fonts/Montserrat/Montserrat-BoldItalic.ttf");
    font-style:italic ;
    font-weight: 700;
    font-display: swap;
  }

/* STYLE RESET */

  * {
    box-sizing: border-box;
    /* transition: all 300ms ease-in-out; */
    margin: 0;
    padding: 0;
  }

  /* General Styles */

  html{
    background-color: var(--color-background);
    }
  body {
    margin:0;
    padding:0;

    font-family: 'Montserrat', sans-serif;
    color: #222;
    
    height: 100%;
    
    /* Links */

    a {
      color: var(---secondary-color);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:active,
    a:hover {
      color: #000;
    }

    /* Headings */

    h1,h2,h3,h4,h5,h6{
      color: var(--primary-color);
      margin: 1rem auto .5rem;
      font-weight: 500;
    }
    
    h1{
      font-weight: 700;
      font-size: clamp(2.5rem, 5vw, 4rem);
    }
    h2{
      font-size: clamp(2rem, 5vw, 3.5rem);
    }
    h3{
      font-size: clamp(1.5rem, 5vw, 3rem);
    }
    h4{
      font-size: clamp(1rem, 5vw, 2.5rem);
    }
    
    /* Text */
    
    p {
      font-size: clamp(1rem, 5vw, 1.5rem);
      font-weight: 400;
      color: var(--color-text)
    }
    
    span {
      color: var(--color-text)
    }

  }
`
export default GlobalStyle
