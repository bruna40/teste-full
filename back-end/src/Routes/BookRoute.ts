import { Router } from 'express';
import BookController from '../Controllers/BookController';

const BookRouter = Router();

BookRouter
    .get('/', (req,res, next) => new BookController(req, res, next).getAll())
    .get('/:id', (req,res, next) => new BookController(req, res, next).getById())
    .post('/', (req,res, next) => new BookController(req, res, next).create())
    .put('/:id', (req,res, next) => new BookController(req, res, next).update());

export default BookRouter;
