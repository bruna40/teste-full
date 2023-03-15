// Aqui onde fica a comunicação entre a camada do model e do controller, facilitando caso futuramente seja necessário trocar o banco de dados, ou seja, não precisaria alterar o controller, apenas o service.

import Book from "../Domains/Book";
import IBook from "../Interfaces/IBook";
import BookODM from "../Models/BookODM";

export default class BookService {
    private createBookDomain(book: IBook): Book  | null {
        if(!book) return null;
        return new Book(book);
    }

    public async createBook(book: IBook) {
        const bookODM = new BookODM();

        const createCar = await bookODM.create(book);

        return this.createBookDomain(createCar);
    }

    public async getAllBooks() {
        const bookODM = new BookODM();

        const books = await bookODM.getAll();

        return books.map(book => this.createBookDomain(book));
    }

    public async getBookById(_id: string) {
        const bookODM = new BookODM();

        const book = await bookODM.getById(_id)

        if(book === null) return null;

        return this.createBookDomain(book);
    }

    public async updateBook(_id: string, book: IBook) {
        const bookODM = new BookODM();

        const updateBook = await bookODM.updateById(_id, book);

        if(updateBook === null) return null;

        return this.createBookDomain(updateBook);
    }
}