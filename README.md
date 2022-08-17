# Car Shop

Este projeto foi desenvolvido no bloco 30 da **Trybe**, sendo seu objetivo criar uma API REST utilizando TypeScript, Express, Mongoose e conceitos de POO e SOLID.

## Habilidades desenvolvidas
* Programação Orientada a Objetos.
* SOLID.
* Testes Unitários.
* Operações de CRUD utilizando MongoDB e Mongoose.

## Executando a aplicação
Será necessário ter instalado as tecnologias [Docker](https://docs.docker.com/engine/install/) e [Docker Compose](https://docs.docker.com/compose/install/) em sua máquina para executar a aplicação e testes.

1. Clone o repositório:
```sh
 git clone git@github.com:raelnogpires/car-shop.git
```

2. Entre no repositório:
```sh
 cd car-shop
```

4. Execute o docker-compose:
```sh
 docker-compose up -d
```  

Ela estará disponível em `http://localhost:3001` .

Para executar os testes, execute:
```sh
 docker exec -it car_shop npm run test:dev
```

Para parar a aplicação, execute:
```sh
 docker-compose down
```

## Documentação
A documentação desta API está sendo escrita no momento.