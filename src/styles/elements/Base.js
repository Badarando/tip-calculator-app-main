import {createGlobalStyle} from 'styled-components';
import { theme } from '../../pages/Home/style';

export const Base = createGlobalStyle`
body {
    background-color: ${theme.lightGrayishCyan};
}

input {
    width: 18rem;
    height: 3rem;
    background-color: ${theme.veryLightGrayishCyan};
    background-image: url(../images/icon-dollar.svg);
    background-repeat: no-repeat;
    background-position: 5% center;
    border-radius: .4rem;
    border: none;
}

input::placeholder {
    font-family: 'Space Mono', monospace;
    color: ${theme.grayishCyan};
    text-align: right;
    font-size: 1.5rem;
}
    &:focus {
        outline: 1px solid ${theme.strongCyan};
    }
`