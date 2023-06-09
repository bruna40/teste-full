import tabela from '../../data/teste.json';
import { useState, useEffect} from 'react';
import { TableList,FilterDateContainer, P, PaginationContainer } from './style';
import { IFilter } from '../../interfaces/IFilter';
import IBook from '../../interfaces/IBoook';
import usePagination from 'react-use-pagination-hook';

export default function Table({value}: IFilter) {
    const [books, setBooks] = useState(tabela);
    const [anoInicial, setAnoInicial] = useState('');
    const [anoFinal, setAnoFinal] = useState('');
    
    const {
        pageList,
        goNext,
        goBefore,
        setPage,
        currentPage,
    } = usePagination({ numOfPage: 10, totalPage: 10})


    function handleFilterDate(){
        const booksFiltered = tabela.filter((book: IBook) => book.year >= Number(anoInicial) && book.year <= Number(anoFinal));
        setBooks(booksFiltered);
    }

    function testaBusca(titulo: string) {
        const regex = new RegExp(value, 'i');
        return regex.test(titulo);
      }

    useEffect(() => {
        const novaLista = tabela.filter((book: IBook) => 
        testaBusca(book.title) || testaBusca(book.author) || testaBusca(book.language)) 
        setBooks(novaLista);
    }, [value])

    useEffect(() => {
        handleFilterDate();
        setBooks(tabela)
    }, [currentPage])




    return (
        <>
            <FilterDateContainer>
                <form>
                    <label>Filtrar ano de publicação:</label>
                    <input
                        type="text"
                        placeholder="Ano de publicação"
                        order={anoInicial}
                        onChange={(e) => setAnoInicial(e.target.value)}
                        data-testid="input_ano_inicial"

                    />
                    <label>até</label>
                    <input
                        type="text"
                        placeholder="Ano de publicação"
                        order={anoFinal}
                        onChange={(e) => setAnoFinal(e.target.value)}
                        data-testid="input_ano_final"
                    />
                    <button
                        type="button"
                        onClick={handleFilterDate}
                        data-testid="button_filtrar"
                    >Filtrar</button>
                </form>
            </FilterDateContainer>
            <P>{books.length} resultados encontrados</P>
            <TableList>
                <table data-testid="table">
                    <thead>
                        <tr>
                            <th>Livro</th>
                            <th>Autor</th>
                            <th>Idioma</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.title}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.language}</td>
                                <td>{book.year}</td>
                                <td>
                                    <a href={book.link}>Detalhes</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
 
            </TableList>
            <span>
                <PaginationContainer>

                    <button onClick={() => goBefore()}>{'<'}</button>
                    <ul className="pages">
                    {pageList.map((page) => (
                        <button
                        onClick={() => setPage(page)}
                        className={currentPage === page ? 'selected' : ''}
                        key={page}
                        >
                        {page}
                        </button>
                    ))}
                    </ul>
                    <button onClick={() => goNext()}>{'>'}</button>
                </PaginationContainer>
            </span>

        </>
    )
}