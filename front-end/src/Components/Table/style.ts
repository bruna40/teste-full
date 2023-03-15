import styled from 'styled-components';

export const P = styled.p`
    font-size: 1.125rem;
    font-weight: bold;
    color: #7C7C8A;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1.5rem;
`;

export const TableList = styled.div`
    flex: 1;
    margin-top: 2rem;
    overflow: auto;

    table {
        width: 100%;
        boder-collapse: collapse;
        min-width: 600px;

        th {
            padding: 1rem;
            font-size:0.875rem;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }
            
            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }

        td {
            background-color: #fff;
            border-top: 4px solid #f5f5f5;
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                width: 50%;
                padding-left: 1.5rem;
            }
            
            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`;

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
        width: 5rem;
    

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;
        font-weight: bold;
        color: #E1E1E6;

        cursor: pointer;
    }
`;