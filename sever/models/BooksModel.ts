import {
    Schema,
    Model,
    isValidObjectId,
} from 'mongoose';
import IBook from '../interfaces/IBoook';

export default class BooksODM {
    private model: Model<IBook>;
    constructor(
    ) {
        const schema = new Schema({
            title: {type: String, required: true},
            country: {type: String, required: true},
            author: {type: String, required: true},
            language: {type: String, required: true},
            numbPages: {type: Number, required: true},
            year: {type: Number, required: true},
        });
    }

    public async create(book: IBook): Promise<IBook> {
        return this.model.create({...book});
    }
    
    public async getAll(): Promise<IBook[]> {
        return this.model.find();
    }

    public async getOne(_id: string): Promise<IBook | null> {
        if (!isValidObjectId(_id)) throw new Error('Invalid mongo id');
        return this.model.findById(_id);
    }
}