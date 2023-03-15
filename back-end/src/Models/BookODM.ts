import {
    model,
    Model,
    Schema,
    models,
    isValidObjectId,
    UpdateQuery,
} from 'mongoose';
import IBook from '../Interfaces/IBook';

export default class BookODM {
    private schema: Schema;
    private model: Model<IBook>;

    constructor() {
        this.schema = new Schema<IBook>({
            title: {type: String, required: true},
            country: {type: String, required: true},
            author: {type: String, required: true},
            language: {type: String, required: true},
            pages: {type: Number, required: true},
            year: {type: Number, required: true},
        })
        this.model = models.Book || model<IBook>('Book', this.schema);
    }

    public async create(book: IBook): Promise<IBook> {
        return await this.model.create({...book});
    }

    public async getAll(): Promise<IBook[]> {
        return await this.model.find();
    }

    public async getById(_id: string): Promise<IBook | null> {
        if(!isValidObjectId(_id)) throw new Error('Invalid mongo id');
        return await this.model.findById(_id);
    }

    public async updateById(_id: string, book:IBook): Promise<IBook | null> {
        if (!isValidObjectId(_id)) throw new Error('Invalid mongo id');
        return this.model.findByIdAndUpdate(_id, { ...book as UpdateQuery<IBook>}, {new: true});
    }

}