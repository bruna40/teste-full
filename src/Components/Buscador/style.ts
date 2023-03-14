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
    @media (max-width: $mobile) {
        width: 100%;
    }
    input {
        background-color: #E4E4E4;
        border: none;
        color: $black;
        font-size: 1.5rem;
        font-weight: bold;
        height: 100%;
        outline: none;
        width: 100%;
        &::placeholder {
            color: #4C4D5E;
        }
    }
`;