import tabela from '../../data/teste.json';
import { useState, useEffect } from 'react';
import { TableList } from './style';
import { IFilter } from '../../@types/IFilter';
import IBook from '../../@types/IBoook';

export default function Table({value}: IFilter) {
    const [books, setBooks] = useState(tabela);

    function testaBusca(titulo: string) {
        const regex = new RegExp(value, 'i');
        return regex.test(titulo);
      }

    useEffect(() => {
        const novaLista = tabela.filter((book: IBook) => 
        testaBusca(book.title) || testaBusca(book.author) || testaBusca(book.language)) 

        setBooks(novaLista)
    }, [value])



    return (
        <>
            <p>{books.length}</p>
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