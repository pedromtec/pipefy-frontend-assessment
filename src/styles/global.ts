import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    // font-size: 16px Desktop (default)

    html {
        @media (max-width: 1080px) { //15px
            font-size: 93.75%;
        }

        @media (max-width: 720px) { //14px
            font-size: 87.5%;
        }
    }

    // 1 rem = font-size da página = 16px

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
