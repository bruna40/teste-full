import {
    createGlobalStyle,
} from 'styled-components';

type props = {
    theme: {
        background: string;
        button: string;
    };
};

export default createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${( props:props ) => props.theme.background};
    };
    button {
        border-radius: 8px;
        cursor: pointer;
        color: white;
        background-color: ${( props:props ) => props.theme.button};
    };
`;