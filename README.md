# Teste

## Tecnologias utilizadas para o desenvolvimento:

### Front-end

- ReacjS
- Vite
- Styled Components
- TypeScript
- Jest

### Back-end

- NodeJS
- Express
- Moongose
- TypeScript
- Jest


## Como rodar o projeto

### Front-end

* Na pasta fron-end:
intalar as dependências com o comando com: npm install
para rodar o projeto: npm run dev

### Back-end

* Na pasta back-end:
intalar as dependências com o comando com: npm install
No caso da utilização do docker:
- docker-compose up -d
- docker exec -it book_store bash
em caso de acessar o banco de dados:
- docker exec -it book_store_db bash


## Explicando as pastas

### Front-end

A pasta src contém os arquivos do projeto, divididos em:

OBS: as pastas como pages e componentes foram criadas no formato em que cada elemento possui uma pasta quem contém o arquivo index.tsx e o arquivo de estilização.

- Components: contém os componentes reutilizáveis da aplicação:

* Button: É um componente que foi feito para mudar a cor da pagina, e também para mudar o tema da aplicação, para dark ou light.
* Table: É um componente que foi feito para mostrar os dados da tabela, e também para fazer a paginação dos dados.
* FilterDate: É um componente que foi feito para filtrar os dados da tabela por data.
* Buscador: É um componente que foi feito para filtrar os dados da tabela por nome do livro, idioma,autor.

obs: No momento estava tendo dificuldades para conectar o filterDate com o component Table, então a logica foi para a parte de tabela.


- Pages: contém as páginas da aplicação

* Home: é a pagina que será mostrada quando rodar a aplicação.

- Interfaces: contém as interfaces da aplicação

- data: contém os dados utilizado na tabela

- services: essa pasta foi criada para caso exista alguma função recorrente, como por exemplo uma função que faz uma requisição para a api, essa função pode ser colocada nessa pasta.

- styles: contém os estilos globais da aplicação

Na pasta test contém os testes da aplicação


### Back-end

Nessa pasta contém os arquivos back-end, em que optei por utilizar o docker para facilitar a utilização do banco de dados, e também para facilitar a utilização do projeto em outras máquinas.
Além disso, fiz a utilização do moongose para facilitar a utilização do banco de dados.
E optei por fazer em classes, pois acredito que fica mais organizado e mais fácil de entender o código.
E utilizei a arquitetura MSC, pois acredito que fica mais organizado e mais fácil de entender o código.
Na pasta test contém os testes da aplicação

- Explicando as pastas

* Controllers: contém os controllers da aplicação
* Models: contém os models da aplicação
* Routes: contém as rotas da aplicação, optei no formato de pasta caso futuramente seja necessário criar mais rotas
* Services: contém os services da aplicação
* Middlewares: contém os middlewares da aplicação, criei um para caso de erro, caso ocorra algum erro na aplicação, ele será mostrado na tela.
* interfaces: contém as interfaces da aplicação
* test: contém os testes da aplicação

### Explicando as rotas

* GET /books: retorna todos os livros cadastrados no banco de dados
- Exemplo do formato do retorno:
```
{
      {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "language": "English",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
      },
      {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "language": "Danish",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
      },
}
```

* GET /books/:id: retorna o livro com o id passado por parâmetro
* POST /books: cria um novo livro
- Exemplo do formato de criação:
```
{
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "language": "Italian",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    }
}
```

* PUT /books/:id: atualiza o livro com o id passado por parâmetro





