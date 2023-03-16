import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import BookService from '../../../src/Services/BookService';
import { bookInput, bookOutput, allBooksOutput } from '../../mocks/mockBooks';



describe('Deve testar a criação de um livro', () => {
    it('Deve cadastrar um livro', async () => {
        sinon.stub(Model, 'create').resolves(bookOutput);
        const bookService = new BookService();
        const result = await bookService.createBook(bookInput);
        expect(result).to.be.deep.equal(bookOutput);

    });

    it('Deve listar todos os livros', async () => {
        sinon.stub(Model, 'find').resolves(allBooksOutput);
        const bookService = new BookService();
        const result = await bookService.getAllBooks();
        expect(result).to.be.deep.equal(allBooksOutput);

    });

    it('Deve buscar um livro pelo id', async () => {
        sinon.stub(Model, 'findById').resolves(bookOutput);
        const bookService = new BookService();
        const result = await bookService.getBookById('5f1f9b1b9c1b9c1b9c1b9c1c');
        expect(result).to.be.deep.equal(bookOutput);
    });

    afterEach(function () {
        sinon.restore();
    });
});