import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body {
        font-family: 'Muli', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;
        margin: 0;
    }

    .container {
        align-items: center;
    }

    .progress_container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
`;
