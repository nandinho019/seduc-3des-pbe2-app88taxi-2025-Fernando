const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const passageiro = await prisma.passageiro.create({
            data: req.body
        });
        return res.status(201).json(passageiro);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const passageiros = await prisma.passageiro.findMany();
    return res.json(passageiros);
}

const readOne = async (req, res) => {
    try {
        const passageiro = await prisma.passageiro.findUnique({
            select: {
                id: true,
                nome: true,
                cpf: true,
                email: true,
                viagens: true
            },
            where: {
                id: Number(req.params.id)
            }
        });
        return res.json(passageiro);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const passageiro = await prisma.passageiro.update({
            where: {
                ra: req.params.ra
            },
            data: req.body
        });
        return res.status(202).json(passageiro);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.passageiro.delete({
            where: {
                ra: req.params.ra
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };