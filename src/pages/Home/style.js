import styled from 'styled-components';


export const theme = {
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkgrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)'
}

export const Logo = styled.section`
    width: 5rem;
    height: 5rem;
    margin: auto;
    margin-top: 2.5rem;
    background-image: url('../../images/logo.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: 1px solid red;

    @media (min-width: 23.5rem) {
        border: 1px solid yellow;
    }

`;

export const Main = styled.main`
    width: 100vw;
    height: 50.6rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.white};

`

export const SectionBill = styled.section`
    width: 20rem;
    height: 3.5rem;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h3`
    width: 20rem;
    height: 1.2rem;
    border: 1px solid green;
    color: ${theme.darkgrayishCyan};
    font-family: 'Space Mono', monospace;
    margin-bottom: 1rem;
`;

export const SectionTip = styled.section`
    width: 20rem;
    height: 13rem;
    border: 1px solid yellow;
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    
`;

export const Button = styled.button`
    width: 9.5rem;
    height: 3rem;
    background-color: ${theme.veryDarkCyan};
    color: ${theme.white};
    border-radius: .3rem;
    border: none;

    font-family: 'Space Mono', monospace;
    font-size: 1.5rem;
    
`;