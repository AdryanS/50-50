import { createGlobalStyle } from "styled-components";

// body - global;

export const Global = createGlobalStyle`
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: hidden;

        .image {
            width: 90px;
            height: 85vh;
            margin: 20px;

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            display: flex;
            align-items: flex-end;

            border-radius: 24px;
            transition: width 1s ease-in;

            p {
                width: 100%;
                margin: 16px;
                opacity: 0;
                color: #fff;
                font-family: nunito;
                font-size: 1.4rem;
                font-weight: 600;
                transition: opacity 0.5s ease-in 0.3s;
            }
        }

        div .true {
            width: 1300px;
            p {
                opacity: 1;
            }
        }
    }
`;
