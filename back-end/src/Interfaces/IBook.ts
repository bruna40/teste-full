//  Criei esse arquivo para definir o tipo de dados que será utilizado no projeto
//  Para facilitar, caso nessecite da interface em outro arquivo, basta importar

export default interface IBook {
    id?: string;
    title: string;
    country: string;
    author: string;
    language: string;
    pages: number;
    year: number;
}