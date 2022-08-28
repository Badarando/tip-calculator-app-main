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
    margin-bottom: 1rem;
    background-image: url('../../images/logo.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media (min-width: 75rem) {
        width: 6rem;
        margin-bottom: 6rem;
    }

`;

export const Main = styled.main`
    width: 23.438rem;
    height: 49.8rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem 2rem 0 0;
    background-color: ${theme.white};

    @media (min-width: 75rem) {
        width: 55rem;
        height: 30rem;
        border-radius: 2rem;
        flex-direction: row;
    }
`

export const SectionData = styled.section`

    @media (min-width: 75rem) {
            width: 23.438rem;
            height: 30rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 25.5rem;
            width: 30rem;
            
        }
`

export const SectionDataResult = styled.section`
    @media (min-width: 75rem) {
        width: 27rem;
        height: 19rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 26rem;
        
    }
`

export const SectionBill = styled.section`
    width: 20rem;
    height: 3.5rem;

    @media (min-width: 75rem) {
        align-self: flex-start;
        margin-left: 2rem;
    }
`;

export const Title = styled.h3`
    width: 20rem;
    height: 1.2rem;
    color: ${theme.darkgrayishCyan};
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    @media (min-width: 75rem) {
    width: 25rem;
    }
`;

export const SectionTip = styled.section`
    width: 20rem;
    height: 13rem;
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;

    @media (min-width: 75rem) {
        width: 24rem;
        column-gap: 1rem;
        row-gap: .4rem;
    }
    
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

    @media (min-width: 75rem) {
        width: 7rem;
    }
    
`;

export const SectionAmount = styled.section`
    width: 20rem;
    height: 4rem;
    margin-bottom: 1rem;

    @media (min-width: 75rem) {
        align-self: flex-start;
        margin-left: 2rem;
    }
`

export const SectionResult = styled.section`
    width: 20rem;
    height: 16rem;
    background-color: ${theme.veryDarkCyan};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: .8rem;
    row-gap: 0px;

    @media (min-width: 75rem) {
        height: 26rem;
        width: 23.438rem;
        align-content: flex-start;
        column-gap: 2.5rem;
    }
`

export const Div = styled.div`
    width: 8rem; 
    height: 4rem;
    padding-left: .8rem;

    @media (min-width: 75rem) {
        margin-top: 1rem;
    }
`

export const TipAmount = styled(Title)`
    width: 7.6rem;
    height: 3rem;
    color: ${theme.white};

    span {
        color: ${theme.grayishCyan};
        font-size: 1rem;
    }
`

export const TipValue = styled.h1`
    font-family: 'Space Mono', monospace;
    color: ${theme.strongCyan};
    text-align: right;
`

export const Reset = styled(Button)`
    width: 17rem;
    margin: auto;
    text-transform: uppercase;
    margin-bottom: 1.4rem;
    background-color: ${theme.strongCyan};
    color: ${theme.veryDarkCyan};
    
    @media (min-width: 75rem) {
        margin-top: 11rem;
        margin-bottom: 0;

        &:active {
            background-color: ${theme.lightGrayishCyan};
        }
    }
`