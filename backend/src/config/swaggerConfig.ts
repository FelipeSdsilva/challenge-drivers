const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API BLESSEDDRIVE',
            version: '1.0.0',
            description: `This project presents a challenge. \n
            It aims to resolve a quest about users requesting a trip in a private car from point A to point B.\n
            The users can have options for drivers and values, confirm the trip, and list historic of trips.`,
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
    apis: ['./src/common/routes/*.ts'],
};

export default swaggerOptions;
