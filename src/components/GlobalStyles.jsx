import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Roboto', sans-serif;
    color: #000000;
    font-size: 12px;
    line-height: 1.33;
}

a {
    text-decoration: none;
}

h1,
h2,
h3,
h4,
p,
a,
ul,
button {
    margin: 0;
    padding: 0;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

ul {
    list-style: none;
}
`;
