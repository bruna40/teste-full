import tabela from '../../data/teste.json';
import { useState, useEffect } from 'react';

export default function Table() {
    const [books, setBooks] = useState(tabela);

    useEffect(() => {
        setBooks(tabela);
    }, []);



    return (
        <>
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
                                <button type="button">{book.link}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}