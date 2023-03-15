import { Router } from 'express';
import BookController from '../Controllers/BookController';

const BookRouter = Router();

BookRouter
    .get('/books', (req,res, next) => new BookController(req, res, next).getAll())
    .get('/books/:id', (req,res, next) => new BookController(req, res, next).getById())
    .post('/books', (req,res, next) => new BookController(req, res, next).create())
    .put('/books/:id', (req,res, next) => new BookController(req, res, next).update());

export default BookRouter;
