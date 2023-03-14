import IBook from "../interfaces/IBoook";

export default class Book {
    protected id: string | undefined;
    protected title: string;
    protected country: string;
    protected author: string;
    protected language: string;
    protected numbPages: number;
    protected year: number;

    constructor(book: IBook) {
        this.id = book.id;
        this.title = book.title;
        this.country = book.country;
        this.author = book.author;
        this.language = book.language;
        this.numbPages = book.numbPages;
        this.year = book.year;
    }

    public getId() {
        return this.id;
    }

    public setId(id: string) {
        this.id = id;
    }

    public getTitle() {
        return this.title;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getCountry() {
        return this.country;
    }

    public setCountry(country: string) {
        this.country = country;
    }

    public getAuthor() {
        return this.author;
    }

    public setAuthor(author: string) {
        this.author = author;
    }

    public getLanguage() {
        return this.language;
    }

    public setLanguage(language: string) {
        this.language = language;
    }

    public getNumbPages() {
        return this.numbPages;
    }

    public setNumbPages(numbPages: number) {
        this.numbPages = numbPages;
    }

    public getYear() {
        return this.year;
    }

    public setYear(year: number) {
        this.year = year;
    }
}