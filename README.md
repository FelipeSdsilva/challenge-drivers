## API BLESSEDDRIVE

Uma aplicação conceito onde o usuário poderá solicitar uma viagem em carro particular de um ponto A até um ponto B. Ele poderá escolher entre algumas opções de motoristas e valores e confirmar a viagem. Poderá ver o histórico das viagens realizadas.

<hr>

## 📋 Funcionalidades

- [x] **Valor da viagem**: .
- [x] **Confirmar viagem**: .
- [x] **Histórico de viagens**: .
- [x] **API REST**: Comunicação entre o **frontend** e **backend**.

<hr>
  

## 📦 Estrutura do Projeto
  
 ```bash
/challenge-drivers
├── backend/
|   ├── prisma/
|   |   ├── migrations/
|   |   └── schema.prisma
|   |   └── seed.ts 
|	├── src/
|	│   ├── common/ 
|	│   │   ├── controllers/        # Controladores REST.
|	│   │   ├── models/             # Entidades de negócios.
|	|   |   ├── middleware/         # Exceções personalizadas.
|	|   |	├── DTO/                # DTO reproduzir resp/env customizados.
|	|   |   ├── routes/             # Bodys customizados.
|	│   │   ├── utils/              # Metódos muitos utilizados.
|	│   │   ├── services/           # Serviços de negócio.
|	│   └── config/
|	│   |    └── swaggerConfig.ts   # Configurações do servidor (SWAGGER).
|   |   └── db/
|   |   |    └── prisma.ts          # Configurações de sessões do banco.
|   |   |
|	|	└── app.ts                  # Configurações iniciais.
|	|	└── index.ts                # Incializador do backend.
|	|
|	└── tests/                             
|	    ├──                       
|	    ├──                    
|	    └──                        
|
├──frontend/
│  └── src/ 
│      ├── components/             # Componentes React
│      └── services/               # Serviços de consumo da API 
|
└── docker-compose.yml             # Config do Docker para back e front
└── README.md                      # Descrição do projeto o melhor.
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

### Passo 2: Executar o Backend

 1 - **Acesse a pasta do backend:**
```bash
cd backend
```


3 - **Executar a aplicação (Terminal)**:
```bash
./mvnw spring-boot:run
```
  
  4- Acessando a Documentação Swagger:
	Após a execução, acesse:
	http://localhost:8080/api-docs

<hr>



<hr>

## 📄 Exemplos de Endpoints



<hr>


---
## 📄 Licença

Este projeto é licenciado sob a **SaaS License**. Consulte [LICENSE](https://github.com/felipesousasilva/adocao-animais/license) para mais detalhes.

---

## ✉️ Contato

**Felipe Sousa da Silva**  
[WhatsApp](https://web.whatsapp.com/send?phone=11954705118)
[GitHub](https://github.com/FelipeSdsilva)  
[✉️ E-mail](felipe.fps09@hotmail.com)
[LinkedIn](https://www.linkedin.com/in/felipesdsilva/)
