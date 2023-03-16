import * as sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import request from 'supertest';
import app from '../../../src/app';
import BookService from '../../../src/Services/BookService';
import connection from '../../../src/Models/connection';
import { bookInput, bookOutput, allBooksOutput } from '../../mocks/mockBooks';

const service = new BookService();

describe('Testa a camada controller', () => {

    it('Testa se cria um livro', async function() {
        connection();

        sinon.stub(Model, 'create').resolves(bookOutput);
        sinon.stub(service, 'createBook').resolves(bookOutput);

        const result = await request(app).post('/books').send(bookInput);

        expect(result.status).to.be.equal(201);
        expect(result.body).to.haveOwnProperty('id');
    })

    it('Testa se lista todos os livros', async function() {
        sinon.stub(Model, 'find').resolves(allBooksOutput);

        const result = await request(app).get('/books').send(allBooksOutput);

        expect(result.status).to.equal(200);
        expect(result.body[0]).to.haveOwnProperty('id');

    });
    afterEach(function () {
        sinon.restore();
    });
});