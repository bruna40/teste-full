import Book from '../../src/Domains/Book';
import IBook from '../../src/Interfaces/IBook';

export const bookInput: IBook = {
    title: 'The Hobbit',
    country:'United Kingdom',
    author: 'J. R. R. Tolkien',
    language: 'English',
    pages: 310,
    year: 1937,
};

export const bookOutput: Book = new Book({
    id: '5f1f9b1b9c1b9c1b9c1b9c1c',
    title: 'The Hobbit',
    country:'United Kingdom',
    author: 'J. R. R. Tolkien',
    language: 'English',
    pages: 310,
    year: 1937,
});

export const allBooksOutput: IBook[] = [
    {
        id: '5f1f9b1b9c1b9c1b9c1b9c1b',
        title: 'The Lord of the Rings',
        country:'United Kingdom',
        author: 'J. R. R. Tolkien',
        language: 'English',
        pages: 1178,
        year: 1954,

    },
    {
        id: '5f1f9b1b9c1b9c1b9c1b9c1c',
        title: 'The Hobbit',
        country:'United Kingdom',
        author: 'J. R. R. Tolkien',
        language: 'English',
        pages: 310,
        year: 1937,
    },
];