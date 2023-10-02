# CEFIS - Desafio Frontend

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor na CEFIS.

O projeto consiste em uma aplicação web que consome uma [API](https://github.com/lucasborges24/cefis) também construída no desafio e permite:

- Logar/Deslogar na aplicação com uma conta já existente;
- Listar todos os cursos disponíveis de forma páginada com possibilidade de filtrar por curso.
- ~~Listar as perguntas de um curso, além de alunos poderem criar perguntas e professores poderem respondê-las~~
- ~~Conversar com professores e alunso num chat em tempo real~~

> ⚠️ Os items riscados eram requisitos do desafio, porém não foram implementados por falta de tempo.

## 🚀 Versão em Produção

É possível acessar a versão em produção do projeto pelo seguinte [link](https://cefis-front.vercel.app/).

## 🛠️ Rodando o Projeto Localmente com Docker

Este projeto é configurado para ser executado usando o Docker e o Docker Compose. Para executar o projeto localmente, siga os passos abaixo:

### Pré-Requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Instruções

1. **Clone o Repositório**

   ```sh
   git clone https://github.com/lucasborges24/cefis-front
   cd cefis-front
   ```

2. **Construa e Execute o Container**

   ```sh
    docker-compose up --build
   ```

3. **Acesse a Aplicação**
   Abra o navegador e acesse o endereço `http://localhost:3000`
