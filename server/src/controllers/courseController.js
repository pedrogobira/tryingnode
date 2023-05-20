const course = require('../models/course');

module.exports = {
    async create(request, response) {
        const { name } = request.body;
        const record = await course.getByName(name);

        if (record.length !== 0) {
            return response.status(400).json({
                statusCode: 400,
                message: 'Já existe um curso com esse nome'
            });
        }

        try {
            await course.create({ name });

            return response.status(201).json({
                statusCode: 201,
                message: 'Curso cadastrado com sucesso'
            });
        } catch (error) {
            return response.status(500).json({
                statusCode: 500,
                message: 'Erro ao cadastrar curso'
            });
        }
    },

    async list(request, response) {
        try {
            const courses = await course.list();

            return response.status(200).json({
                statusCode: 200,
                courses: courses,
            });
        } catch (error) {
            return response.status(404).json({
                statusCode: 404,
                message: 'Nenhum curso encontrado',
            });
        }
    },

    async getById(request, response) {
        const id = request.params.id;

        try {
            const record = await course.getById(id);

            if (record.length !== 0) {
                return response.status(200).json({
                    statusCode: 200,
                    course: record
                });
            }

            return response.status(404).json({
                statusCode: 404,
                message: 'Nenhum curso encontrado'
            });
        } catch (error) {
            return response.status(500).json({
                statusCode: 500,
                message: 'Erro ao buscar curso'
            });
        }
    },

    async delete(request, response) {
        const id = request.params.id;

        try {
            await course.delete(id);

            return response.status(200).json({
                statusCode: 200,
                message: 'Curso removido com sucesso'
            });
        } catch (error) {
            return response.status(400).json({
                statusCode: 400,
                message: 'Erro ao remover curso'
            });
        }
    },

    async update(request, response) {
        const id = request.params.id;
        const { name } = request.body;

        try {
            const record = await course.getById(id);

            if (record.length === 0) {
                return response.status(404).json({
                    statusCode: 404,
                    message: 'Nenhum curso encontrado para ser atualizado'
                });
            }

            const updated = { name: name };
            await course.update(updated, id);

            return response.status(200).json({
                statusCode: 200,
                message: 'Curso atualizado com sucesso!'
            });
        } catch (error) {
            return response.status(400).json({
                statusCode: 400,
                message: 'Erro ao atualizar curso'
            });
        }
    },
};
