const conn = require('../db/config');

module.exports = {
    async list() {
        const result = await conn.promise().query(`SELECT * FROM course`);
        return result[0];
    },

    async create(newCourse) {
        const data = await conn.promise().query(`SELECT name FROM course WHERE name = "${newCourse.name}"`);
        conn.execute(`INSERT INTO course (name) VALUES ("${newCourse.name}")`);
    },

    async delete(id) {
        await conn.promise().execute(`DELETE FROM course WHERE id = "${id}"`);
    },

    async update(updatedCourse, id) {
        await conn.promise().execute(`UPDATE course SET name = "${updatedCourse.name}" WHERE id = "${id}"`);
    },

    async getByName(name) {
        const result = await conn.promise().query(`SELECT * FROM course WHERE name = "${name}"`);
        return result[0];
    },

    async getById(id) {
        const result = await conn.promise().query(`SELECT * FROM course WHERE id = "${id}"`);
        return result[0];
    },
};
