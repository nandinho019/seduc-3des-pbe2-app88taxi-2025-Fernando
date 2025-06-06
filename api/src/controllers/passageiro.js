const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const passageiros = await prisma.passageiros.create({
        });
        return res.status(201).json(passageiros);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const read = async (req, res) => {
    const passageiroospassageiros = await prisma.passageiros.findMany(); 
    return res.json(passageiroospassageiros);
}

const readOne = async (req, res) => {
    try {
        const passageiros = await prisma.passageiros.findUnique({ 
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
        return res.json(passageiros);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const passageiros = await prisma.passageiros.update({ 
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });
        return res.status(202).json(passageiros);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        await prisma.passageiros.delete({ 
            where: {
                id: Number(req.params.id)
            }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

module.exports = { create, read, readOne, update, remove };