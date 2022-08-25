import {createGlobalStyle} from 'styled-components';
import { theme } from '../../pages/Home/style';

export const Base = createGlobalStyle`
body {
    background-color: ${theme.lightGrayishCyan};
}
`