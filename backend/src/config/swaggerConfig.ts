const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API BLESSEDDRIVE',
            version: '1.0.0',
            description: '',
            contact: {
                name: 'Felipe Sousa',
                email: 'felipe.fps09@hotmail.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'Development Server',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Caminho para os arquivos de rotas com anotações
};

export default swaggerOptions;
