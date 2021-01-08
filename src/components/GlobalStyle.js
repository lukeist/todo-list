import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb { 
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
    }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2 {
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #FF7676
    }
    `;

export default GlobalStyle;
