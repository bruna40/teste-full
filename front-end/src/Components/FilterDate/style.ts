import styled from "styled-components";


export const FilterDateContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    font-weight: bold;
    font-size: 1.125rem;

    input {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        background: transparent;
        height: 1.5rem;
        border:0;
        border-bottom: 2px solid #7C7C8A;
        font-weight: bold;
        font-size: 1.125rem;
        padding: 0 0.5rem;

        &:focus {
            box-shadow: none;
            border-color: #7C7C8A;
        }
    }

    button {
        border: none;
        boder-radius: 8px;
        padding: 0.8rem;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;
        font-weight: bold;
        color: #E1E1E6;

        cursor: pointer;

        background: #7C7C8A;
    }
`;