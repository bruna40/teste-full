import Book from "../domains/Book";
import IBook from "../interfaces/IBoook";
import BooksODM from "../models/BooksModel";

export default class BookServices {
    private createBookDomain(book: IBook): Book  | null {
        if(!book) return null;
        return new Book(book);
    }
    public async getAllBooks() {
        const booksODM = new BooksODM();
        const books = await booksODM.getAll();
        return books.map((book: IBook) => new Book(book));
    }

    public async getOneBook(_id: string) {
        const booksODM = new BooksODM();
        const book = await booksODM.getOne(_id);
        if (book === null) return null;

        return this.createBookDomain(book);

    }

}