import {createGlobalStyle} from 'styled-components';
import { theme } from '../../pages/Home/style';

export const Base = createGlobalStyle`
body {
    background-color: ${theme.lightGrayishCyan};
}

input {
    width: 17rem;
    height: 3rem;
    padding-right: 1rem;
    background-color: ${theme.veryLightGrayishCyan};
    background-image: url(../images/icon-dollar.svg);
    background-repeat: no-repeat;
    background-position: 5% center;
    border-radius: .4rem;
    border: none;

    text-align: right;
    font-family: 'Space Mono', monospace;
    color: ${theme.veryDarkCyan};
    font-size: 1.5rem;
    
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

.custom {
    width: 8rem;
    height: 3rem;
    text-align: right;
    font-family: 'Space Mono', monospace;
    color: ${theme.veryDarkCyan};
    font-size: 1.5rem;
    background-image: none;
}


`