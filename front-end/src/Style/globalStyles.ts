import {
    createGlobalStyle,
} from 'styled-components';

type props = {
    theme: {
        background: string;
        button: string;
        th: string;
        header: string;
    };
};

export default createGlobalStyle`
    html, body {
        width: 100%;
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
    th {
        background-color: ${( props:props ) => props.theme.th};
    }
    header {
        background: ${( props:props ) => props.theme.header};
    }

`;