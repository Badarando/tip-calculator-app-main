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
    width: 23.438rem;
    height: 15rem;
    height: 5rem;
    background-color: ${theme.white};
`