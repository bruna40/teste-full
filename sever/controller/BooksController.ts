import { Request, Response } from 'express';
import BookServices from '../services/BookServices';

export default class BooksController {
    private req: Request;
    private res: Response;
    private services: BookServices;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
        this.services = new BookServices();
    }

    public async getAllBooks() {
        const books = await this.services.getAllBooks();
        this.res.status(200).json(books);
    }

    public async getOneBook() {
        const { id } = this.req.params;
        try {
            const book = await this.services.getOneBook(id);
            if (book === null) {
                return this.res.status(404).json({ message: 'Book not found' });
            }
            this.res.status(200).json(book);
        } catch (error) {
            this.res.status(400).json({ message: 'Invalid id' });
        }
    }
}