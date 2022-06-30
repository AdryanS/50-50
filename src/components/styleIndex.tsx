import styled from 'styled-components';

// body - global;

export const Background = styled.div`
        height: 100vh;
`;

// container - flex - center

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 0;

    a {
        color: #00adb5;
        transition: 0.5s;      
    }

    a:hover {
        color: #037e85;
    }
    
`

// container - flex

export const ContainerProjects = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 32px 0;
    margin-top: 32px;
    background-color: #eeeeee;
    border-radius: 6px;
`

// text large

export const TextLarge = styled.h1`
        font-size: 3.2em;
        font-weight: 400;
        font-family: Roboto;
        color: #eeeeee;
        padding: 16px 0 32px 0;
`

// text small

export const TextSmall = styled.h2`
        font-size: 1em;
        font-weight: 400;
        font-family: Nunito;
        color: #eeeeee;
        padding: 0 0 32px 0;
`

export const Pesquisa = styled.input`
  width: 320px;
  height: 32px;
  padding: 4px 8px;
  background-color: #eeeeee;
  border-style: none;
  border: #00adb5 2px solid;
  border-radius: 4px;
`

export const StyledProjects = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #00adb5;
`

export const StyledContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 4px 0;
    padding: 18px;
    background-color: #d3d3d3;
    border-radius: 6px;

    p {
      width: 100px;
      display: flex;
      justify-content: center;
      color:  #222831;
      font-family: Nunito;
      font-weight: 500;
      font-size: 1rem;
    }

    a {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #00adb5;
      font-family: Nunito;
      font-weight: 500;
      font-size: 1rem;
      transition: 0.6s;
    }

    a:hover {
      color: #037e85;
    }
` 