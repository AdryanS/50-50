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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .progress_container {
        width: 320px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }

    .progress {
        width: 0px;
        height: 4px;
        position: absolute;
        background-color: #0ed891;
        transition: all 0.3s ease-in-out;
    }
    .progress_container::before {
        content: '';
        background-color: #8b8b8b;
        position: absolute;
        height: 4px;
        width: 320px;
    }
    
    .circle {
        width: 32px;
        height: 32px;
        background-color: #fff;
        border-radius: 50%;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        border: #8b8b8b solid 3px;
        transition: all 0.5s ease-in-out;
    }
    
    .active {
        border: #0ed891 solid 3px;
    }

    .buttons {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    button {
        width:64px;
        margin: 28px;
        height: 24px;
        background-color: #0ed891;
        border-style: none;
        transition: all 0.3s ease-in-out;
    }

    button:hover {
        background-color: #50e7b2;
    }

    button:disabled {
        background-color: #6d6d6d;
    }
`;
