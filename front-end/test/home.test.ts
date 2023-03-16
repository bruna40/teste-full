import Home from './../src/Pages/Home';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

const home = typeof Home;

describe('Testando se os elementos estão em tela', () => {
    it('Testa se o search está em tela', () => {
        const { getByTestId } = render(home);
        const search = getByTestId('input__search');
        expect(search).toBeInTheDocument();
    });
    it('Testa se tem os inputs de data', () => {
        const { getByTestId } = render(home);

        const date1 = getByTestId('input_ano_inicial');
        const date2 = getByTestId('input_ano_final');

        expect(date1).toBeInTheDocument();
        expect(date2).toBeInTheDocument();
    })

    it('Testa se a tabela está em tela', () => {
        const { getByTestId } = render(home);

        const table = getByTestId('table');

        expect(table).toBeInTheDocument();
    });
})