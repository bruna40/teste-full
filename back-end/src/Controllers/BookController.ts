import { NextFunction, Request, Response } from "express";
import BookService from "../Services/BookService";
import IBook from "../Interfaces/IBook";

export default class BookController {
    private req : Request;
    private res : Response;
    private next : NextFunction;
    private service : BookService;

    constructor(req : Request, res : Response, next : NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.service = new BookService();
    }

    public async create() {
        const book: IBook = {
            title: this.req.body.title,
            country: this.req.body.country,
            author: this.req.body.author,
            language: this.req.body.language,
            pages: this.req.body.pages,
            year: this.req.body.year
        };

        try{
            const createBook = await this.service.createBook(book);
            return this.res.status(201).json(createBook);
        } catch (error) {
            return this.next(error);
        }
    }

    public async getAll() {
        try {
            const books = await this.service.getAllBooks();
            return this.res.status(200).json(books);
        } catch (error) {
            return this.next(error);
        }
    }

    public async getById() {
        const { id } = this.req.params;

        try {
            const book = await this.service.getBookById(id);
            if (book === null) return this.res.status(404).json({ message: 'Book not found' });
            return this.res.status(200).json(book);
        } catch (error) {
            return this.res.status(422).json({ message: 'Invalid mongo id' });
        }
    }

    public async update() {
        const { id } = this.req.params;
        const book: IBook = {
            title: this.req.body.title,
            country: this.req.body.country,
            author: this.req.body.author,
            language: this.req.body.language,
            pages: this.req.body.pages,
            year: this.req.body.year
        };

        try { 
            const updateBook = await this.service.updateBook(id, book);
            if (updateBook === null) return this.res.status(404).json({ message: 'Book not found' });
            return this.res.status(200).json(updateBook);
        } catch (error) {
            return this.res.status(422).json({ message: 'Invalid mongo id' });
        }

    }

}