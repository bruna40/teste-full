import styled from "styled-components";

export const HeaderContainer = styled.header`
    margin-top: -8px;
    background: #7C7C8A;


    div {
        margin: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        display: flex;
        gap: 0.5rem;

        input {

            background: transparent;
            height: 2.5rem;
            boder: 0;
            border-bottom: 2px solid #7C7C8A;
            font-size: 2rem;
            font-weight: bold;
            padding: 0 0.5rem;

            &:focus {
                box-shadow: none;
                border-color: #7C7C8A;
            }

            &::placeholder {
                color: #7C7C8A;
            }
        }

        button {
            border: none;
            width: 100%;
            boder-radius: 8px;
            padding: 0.8rem;

            display: flex;
            align-items: center;
            justify-content: center;

            gap: 0.5rem;
            font-weight: bold;
            cursor: pointer;

            background: #7C7C8A;
        }

    }
`;