import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        font-family: "Roboto", sans-serif;
        font-size: 24px;

        @media (min-width: 768px) {
            font-size: 32px;
        }

        @media (min-width: 1024px) {
            font-size: 16px;
        }
    }
`

export default GlobalStyle
