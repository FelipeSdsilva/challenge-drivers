import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {

        const customer = await prisma.customer.create({
            data: {
                name: 'Felipe Sousa da Silva',
            },
        });
        console.log('Customer Created:', customer);

        const homerReview = await prisma.review.create({
            data: {
                rating: 2,
                comment: 'Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
            },
        });
        console.log('Homer Review Created:', homerReview);

        const domReview = await prisma.review.create({
            data: {
                rating: 4,
                comment: 'Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!',
            },
        });
        console.log('Dom Review Created:', domReview);

        const jamesBondReview = await prisma.review.create({
            data: {
                rating: 5,
                comment: 'Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.',
            },
        });
        console.log('James Bond Review Created:', jamesBondReview);


        const homer = await prisma.driver.create({
            data: {
                name: 'Homer Simpson',
                description: 'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
                vehicle: 'Plymouth Valiant 1973 rosa e enferrujado',
                taxValue: 2.5,
                minKm: 1,
                review: { connect: { id: homerReview.id } },
            },
        });
        console.log('Homer Driver Created:', homer);

        const dom = await prisma.driver.create({
            data: {
                name: 'Dominic Toretto',
                description: 'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.',
                vehicle: 'Dodge Charger R/T 1970 modificado',
                taxValue: 5.0,
                minKm: 5.0,
                review: { connect: { id: domReview.id } },
            },
        });
        console.log('Dom Driver Created:', dom);

        const jamesBond = await prisma.driver.create({
            data: {
                name: 'James Bond',
                description: 'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.',
                vehicle: 'Aston Martin DB5 clássico',
                taxValue: 10.0,
                minKm: 10.0,
                review: { connect: { id: jamesBondReview.id } },
            },
        });
        console.log('James Bond Driver Created:', jamesBond);

        console.log('Motoristas e Avaliações inseridos com sucesso!');
    } catch (error) {
        console.error('Erro ao criar dados de seed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });