import styled from 'styled-components';


const theme = {
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkgrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)'
}

export const Title = styled.h1`
    color: ${theme.strongCyan};
    font-size: ${props => `${props.fontSize}px`};

    span {
        font-size: 12px;
    }
`;

export const TitleSmall = styled(Title)`
    color: #00FF;
    font-size: 16px;
`;
