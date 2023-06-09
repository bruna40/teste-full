import { useEffect, useState } from 'react';
import { FilterDateContainer } from './style'
import { IFilterDate } from '../../interfaces/IFilterDate';
import IBook from '../../interfaces/IBoook';

export default function FilterDate({value }: IFilterDate){
    const [anoInicial, setAnoInicial] = useState('');
    const [anoFinal, setAnoFinal] = useState('');

    function handleFilterDate(){
        const booksFiltered = value.filter((book: IBook) => book.year >= Number(anoInicial) && book.year <= Number(anoFinal));
        console.log(booksFiltered);
    }



    return (
        <FilterDateContainer>
            <form>
                <label>Filtrar ano de publicação:</label>
                <input
                    type="text"
                    placeholder="Ano de publicação"
                    value={anoInicial}
                    onChange={(e) => setAnoInicial(e.target.value)}
                    data-testid="input_ano_inicial"

                />
                <label>até</label>
                <input
                    type="text"
                    placeholder="Ano de publicação"
                    value={anoFinal}
                    onChange={(e) => setAnoFinal(e.target.value)}
                    data-testid="input_ano_final"
                />
                <button
                    type="button"
                    onClick={handleFilterDate}
                >Filtrar</button>
            </form>
        </FilterDateContainer>
    )
}