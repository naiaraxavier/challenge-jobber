# 🚀 Challenge-Jobber - Backend

Este projeto faz parte de um desafio para criar uma aplicação de gerenciamento de jobs utilizando Django para o backend. O objetivo é desenvolver um sistema CRUD (Create, Read, Update, Delete) que funcione via APIs, utilizando o Django REST Framework e PostgreSQL como banco de dados. O projeto utiliza Docker para facilitar a configuração e execução do ambiente.

## Tecnologias Utilizadas

- **Python** 🐍
- **Django** 🌐
- **PostgreSQL** 🗃️
- **Django REST Framework** 🔗
- **Docker** 🐳
- **Docker Compose** 📦

## Estrutura do Projeto

A pasta principal para o backend é:

- **backend/**: Contém o código do servidor Django.

### Funcionalidades

- **CRUD de Jobs:**
  - **Data de Criação:** Gerada automaticamente ao criar um novo job.
  - **Título do Job:** Campo obrigatório.
  - **Descrição do Job:** Campo obrigatório.
  - **Imagem:** Campo opcional para anexar uma imagem ao job.

### Endpoints da API

Após configurar e rodar o servidor, as APIs estarão disponíveis para os seguintes endpoints:

- **GET /api/jobs/**: Lista todos os jobs.
- **POST /api/jobs/**: Cria um novo job.
- **GET /api/jobs/{id}/**: Retorna os detalhes de um job específico.
- **PUT /api/jobs/{id}/**: Atualiza um job existente.
- **DELETE /api/jobs/{id}/**: Deleta um job.

## Como Rodar o Backend

Você pode rodar o backend localmente usando Docker ou configurando manualmente em sua máquina.

### Rodando com Docker
1. **Clone o repositório:**

   ```bash
   git clone git@github.com:naiaraxavier/challenge-jobber-backend.git
   ```

2. **Configure as variáveis de Ambiente:**

- Navegue até a pasta challenge-jobber/backend/dotenv_files.
- Copie o arquivo .env_example e renomeie para .env.
- Preencha as variáveis de ambiente no arquivo .env com as informações adequadas, como credenciais do banco de dados, chaves secretas, etc.

3. **Navegue até o diretório raiz do projeto:**

   ```bash
   cd challenge-jobber-backend
   ```


4. **Suba os containers com Docker Compose:**

   ```bash
   docker-compose up --build
   ```

5. **Acesse a API:**

   [http://localhost:8000/api/jobs/](http://localhost:8000/api/jobs/)



### Rodando Localmente (sem Docker)

#### Backend

1. **Navegue até o diretório raiz do projeto:**

   ```bash
   cd challenge-jobber-backend/djangoapp
   ```

2. **Crie um ambiente virtual e ative-o:**

   ```bash
   python -m venv venv
   source venv/bin/activate
   # No Windows use `venv\Scripts\activate`
   ```

3. **Instale as dependências do projeto:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure as variáveis de Ambiente:**

- Navegue até a pasta `dotenv_files`.
  - Copie o arquivo `.env_example` e renomeie para `.env`.
  - Preencha as variáveis de ambiente no arquivo `.env` com as informações adequadas, como credenciais do banco de dados, chaves secretas, etc.

5. **Aplique as migrações:**

   ```bash
   python manage.py migrate
   ```

6. **Rode o servidor Django:**

   ```bash
   python manage.py runserver
   ```

7. **Acesse a API no navegador:**

   [http://localhost:8000/api/jobs/](http://localhost:8000/api/jobs/)

