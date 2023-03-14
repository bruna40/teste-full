import tabela from '../../data/teste.json';
import { useState, useEffect} from 'react';
import { TableList,FilterDateContainer, P } from './style';
import { IFilter } from '../../@types/IFilter';
import IBook from '../../@types/IBoook';

export default function Table({value,order}: IFilter) {
    const [books, setBooks] = useState(tabela);
    const [anoInicial, setAnoInicial] = useState('');
    const [anoFinal, setAnoFinal] = useState('');

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
        setBooks(novaLista)
    }, [value])

    useEffect(() => {
        handleFilterDate();
        setBooks(tabela)
    }, [])

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

                    />
                    <label>até</label>
                    <input
                        type="text"
                        placeholder="Ano de publicação"
                        order={anoFinal}
                        onChange={(e) => setAnoFinal(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={handleFilterDate}
                    >Filtrar</button>
                </form>
            </FilterDateContainer>
            <P>{books.length} resultados encontrados</P>
            <TableList>
                <table>
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
                                    {book.link}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableList>

        </>
    )
}