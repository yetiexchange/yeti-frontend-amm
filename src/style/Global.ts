import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }

        nav svg {
      fill: #028AE5 !important;
      overflow: inherit !important;
      
    }

    nav svg:nth-child(2){margin-top: -55px;}

    nav image{
      height: 100px  !important;
    }

    button{
    border: 0 !important;
    outline: none !important;
    }



    @media only screen and (max-width: 968px) {
      nav image{
      height: 35px !important;
        }
    }
  }
`

export default GlobalStyle
