import styled from 'styled-components';

export const TableList = styled.div`
    flex: 1;
    margin-top: 2rem;
    overflow: auto;

    table {
        width: 100%;
        boder-collapse: collapse;
        min-width: 600px;

        th {
            background-color: #f5f5f5;
            padding: 1rem;
            color: #666;
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