import styled from 'styled-components';

export const Input = styled.div`
    align-items: center;
    background-color: #E4E4E4;
    border-radius: 5px;
    display: flex;
    gap: 1.125rem;
    height: 2.625rem;
    justify-content: space-between;
    padding: 0 15px;
    width: 25rem;
    input {
        background-color: #E4E4E4;
        padding-top: -2rem;
        padding-bottom: -2rem;
        padding-left: 0.5rem;
        padding-right: 1.5rem;
        border: none;
        color: $black;
        font-size: 1rem;
        font-weight: bold;
        height: 100%;
        outline: none;
        width: 100s%;
        &::placeholder {
            color: #4C4D5E;
        }
    }
`;