# VERSION (EN) 

# API BLESSEDDRIVE

A conceptual application where users can request a private car ride from point A to point B. Users can choose between different driver options and prices, confirm the ride, and view the history of completed rides.

<hr>

## 📋 Features

 - [x] **Ride Pricing:** Calculate the price for a ride based on distance and selected driver.
 - [x] **Confirm Ride:** Confirm a ride with a selected driver.
 - [x] **Ride History:** View the history of completed rides.
 - [x] **REST API:** **Backend** and **frontend** communication.

<hr>

## 📦 Project Structure

```bash
/challenge-drivers
├── backend/
│   ├── prisma/                     # Prisma ORM configuration
│   │   ├── migrations/             # Database migration history
│   │   ├── schema.prisma           # Database schema definition
│   │   └── seed.ts                 # Script to seed initial data into the database
│   ├── src/
│   │   ├── common/                 # Shared code across different parts of the project
│   │   │   ├── controllers/        # REST controllers for handling routes
│   │   │   ├── models/             # Business entities representing the data
│   │   │   ├── middleware/         # Custom middlewares for validation, authentication, etc.
│   │   │   ├── DTO/                # Data Transfer Objects (Request/Response)
│   │   │   ├── routes/             # Route definitions and linkage with controllers
│   │   │   ├── utils/              # Reusable utility functions and methods
│   │   │   ├── services/           # Business logic and interaction with the data layer
│   │   ├── config/                 # Project configurations
│   │   │   └── swaggerConfig.ts    # Swagger configuration for API documentation
│   │   └── db/                     # Database configuration
│   │   │   └── prisma.ts           # Prisma setup and database connection
│   │   ├── app.ts                  # Initial server configuration (Express)
│   │   └── index.ts                # Main file to start the backend
│   └── tests/                      # Automated tests for the backend
│       ├── 
│       └── 
│
├── frontend/
│   ├── src/                        # Frontend source code
│   │   ├── components/             # Reusable React components
│   │   └── services/               # API consumption services (e.g., axios)
│   └── public/                     # Static files like index.html and assets
│
├── docker-compose.yml              # Docker configuration for backend and frontend
└── README.md                       # Project documentation

```

<hr>

## ⚙️ How to Run

### **Prerequisites**

- **Docker** installed.  
    For standalone execution:
- **Node.js** installed.
- **Docker** (optional) for containerized environments.

<hr>

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/FelipeSdsilva/challenge-drivers

cd challenge-drivers
```

<hr>

## 🐳 **Docker (Preferred Method)**

### **Run Backend and Frontend with Docker**

1. **Build the images**:
```bash
docker-compose build
```

2. Start the containers:
```bash
docker-compose up
```

3. **Access the Swagger Documentation:** After running the server, go to:  
	[http://localhost:8080/api-docs](http://localhost:8080/api-docs)

<hr>

## 📄 API Endpoints Examples


<hr>

## 📄 License

This project is licensed under the SaaS License. Check the LICENSE file for more details.

<hr>

## ✉️ Contact

Felipe Sousa da Silva

[WhatsApp](https://web.whatsapp.com/send?phone=11954705118)

[GitHub](https://github.com/FelipeSdsilva)  

[✉️ E-mail](felipe.fps09@hotmail.com)

[LinkedIn](https://www.linkedin.com/in/felipesdsilva/)

<hr>

# VERSION (PT-BR)

# API BLESSEDDRIVE

Uma aplicação conceito onde o usuário poderá solicitar uma viagem em carro particular de um ponto A até um ponto B. Ele poderá escolher entre algumas opções de motoristas e valores e confirmar a viagem. Poderá ver o histórico das viagens realizadas.  

<hr>

## 📋 Funcionalidades

- [x] **Valor da viagem**: Calcule o preço de uma viagem com base na distância e no motorista selecionado.
- [x] **Confirmar viagem**: Confirme uma viagem com um motorista selecionado.
- [x] **Histórico de viagens**: Veja o histórico de viagens concluídas.
- [x] **API REST**: Comunicação entre o **frontend** e **backend**.

<hr>  
## 📦 Estrutura do Projeto

```bash
/challenge-drivers
├── backend/
│   ├── prisma/                     # Configuração do Prisma ORM
│   │   ├── migrations/             # Histórico de migrações do banco de dados
│   │   ├── schema.prisma           # Definição do esquema do banco de dados
│   │   └── seed.ts                 # Script para popular o banco com dados iniciais
│   ├── src/
│   │   ├── common/                 # Código compartilhado entre diferentes partes do projeto
│   │   │   ├── controllers/        # Controladores REST para lidar com as rotas
│   │   │   ├── models/             # Entidades de negócios representando os dados
│   │   │   ├── middleware/         # Middlewares para validação, autenticação, etc.
│   │   │   ├── DTO/                # Objetos de transferência de dados (Request/Response)
│   │   │   ├── routes/             # Definição das rotas e ligação com os controladores
│   │   │   ├── utils/              # Funções e métodos reutilizáveis
│   │   │   ├── services/           # Lógica de negócio e conexão com a camada de dados
│   │   ├── config/                 # Configurações do projeto
│   │   │   └── swaggerConfig.ts    # Configuração do Swagger para a documentação da API
│   │   └── db/                     # Database configuration
│   │   │   └── prisma.ts           # Prisma setup and database connection
│   │   ├── app.ts                  # Configurações iniciais do servidor Express
│   │   └── index.ts                # Arquivo principal para inicializar o backend
│   └── tests/                      # Testes automatizados para o backend
│      ├──
│      └──
│
├── frontend/
│   ├── src/                        # Código-fonte do frontend
│   │   ├── components/             # Componentes React reutilizáveis
│   │   └── services/               # Serviços para consumo da API (ex.: axios)
│   └── public/                     # Arquivos públicos, como index.html e imagens
│
├── docker-compose.yml              # Configuração do Docker para backend e frontend
└── README.md                       # Documentação do projeto
```

<hr>

## ⚙️ Como Executar
  
Pré-requisitos
- Docker está installado.
 Para caso queira rodar independente é necessário.
- **Node.js** instalado
- **Docker** (opcional) para rodar containers

<hr>

Passo 1: Clonar o Repositório

```bash
git clone https://github.com/FelipeSdsilva/challenge-drivers

cd challenge-drivers
```
  
  <hr>
## 🐳 Docker (PRINCiPAL)

### Executar Backend e Frontend com Docker:
1. **Build das imagens**:

```bash
docker-compose build
```

2. **Iniciar os containers**:
```bash
docker-compose up
```

3. Acessando a Documentação Swagger: Após a execução, acesse:
    http://localhost:8080/api-docs

<hr>

##📄 **Exemplos de Endpoints**

<hr>  

## 📄 Licença

Este projeto é licenciado sob a **SaaS License**. Consulte [LICENSE](https://github.com/felipesousasilva/adocao-animais/license) para mais detalhes.

---  

## ✉️ Contato

**Felipe Sousa da Silva**  
[WhatsApp](https://web.whatsapp.com/send?phone=11954705118)

[GitHub](https://github.com/FelipeSdsilva)  

[✉️ E-mail](felipe.fps09@hotmail.com)

[LinkedIn](https://www.linkedin.com/in/felipesdsilva/)
