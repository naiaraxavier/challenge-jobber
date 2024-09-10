# 🚀 Challenge-Jobber

Este projeto faz parte de um desafio para criar uma aplicação de gerenciamento de jobs utilizando Django para o backend e React para o frontend. O objetivo é desenvolver um sistema CRUD (Create, Read, Update, Delete) que funcione tanto por meio de interfaces gráficas quanto via APIs, utilizando o Django REST Framework para a API e PostgreSQL como banco de dados. O projeto também utiliza Docker para facilitar a configuração e execução do ambiente.

## Tecnologias Utilizadas

- **Python** 🐍
- **Django** 🌐
- **PostgreSQL** 🗃️
- **Django REST Framework** 🔗
- **React** ⚛️
- **Docker** 🐳
- **Docker Compose** 📦

## Estrutura do Projeto

O projeto está organizado em duas principais pastas:

- **backend/**: Contém o código do servidor Django.
- **frontend/**: Contém o código da aplicação React.

### Primeira Fase do Desafio

Nesta fase, o foco é rodar o projeto localmente e garantir que o CRUD funcione tanto por interface gráfica quanto via APIs.

#### Funcionalidades:

- **CRUD de Jobs:**
  - **Data de Criação:** Gerada automaticamente ao criar um novo job.
  - **Título do Job:** Campo obrigatório.
  - **Descrição do Job:** Campo obrigatório.
  - **Imagem:** Campo opcional para anexar uma imagem ao job.

#### Telas:

1. **Tela de Listagem de Jobs:**

   - Exibe uma tabela com:
     - Título do job.
     - Data de criação.
     - Botões para adicionar um novo job, editar e deletar jobs existentes.

2. **Tela de Adicionar/Editar Job:**
   - Permite adicionar um novo job ou editar um job existente.
   - Inclui campos para título, descrição e imagem.

### Segunda Fase do Desafio

Na segunda fase, o fluxo de criação, leitura, atualização e exclusão de jobs é implementado para funcionar também via APIs, utilizando o Django REST Framework e fazer deploy do projeto no Heroku e rodar em servidor aberto na web.

## Como Rodar o Projeto

Você pode rodar o projeto localmente usando Docker ou configurando manualmente em sua máquina.

### Rodando com Docker

1. **Clone o repositório:**

   ```bash
   git clone git@github.com:naiaraxavier/challenge-jobber.git
   ```

2. **Configure as variáveis de Ambiente:**

- Navegue até a pasta challenge-jobber/backend/dotenv_files.
  - Copie o arquivo .env_example e renomeie para .env.
  - Preencha as variáveis de ambiente no arquivo .env com as informações adequadas, como credenciais do banco de dados, chaves secretas, etc.

3. **Navegue até o diretório raiz do projeto:**

```bash
cd challenge-jobber
```

3. **Suba os containers com Docker Compose:**

   ```bash
   docker-compose up --build
   ```

4. **Acesse as aplicações:**

   - **Frontend (React):** [http://localhost:3000](http://localhost:3000)
   - **Backend (Django API):** [http://localhost:8000/api/jobs/](http://localhost:8000/api/jobs/)

### Rodando Localmente (sem Docker)

#### Backend

1. **Navegue até a pasta `backend`:**

   ```bash
   cd backend
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

- Navegue até a pasta `backend/dotenv_files`.
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

#### Frontend

1. **Navegue até a pasta `frontend`:**

   ```bash
   cd frontend
   ```

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse o frontend no navegador:**

   [http://localhost:3000](http://localhost:3000)

## APIs

Após configurar e rodar o servidor, as APIs estarão disponíveis para os seguintes endpoints:

- **GET /api/jobs/**: Lista todos os jobs.
- **POST /api/jobs/**: Cria um novo job.
- **GET /api/jobs/{id}/**: Retorna os detalhes de um job específico.
- **PUT /api/jobs/{id}/**: Atualiza um job existente.
- **DELETE /api/jobs/{id}/**: Deleta um job.
