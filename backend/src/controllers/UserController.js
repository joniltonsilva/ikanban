const connection = require('../database/connection');

module.exports = {

    async get(request, response) {
        const users = await connection('users').select(['id', 'name', 'email']);
        return response.json(users);
    },

    async post(request, response) {
        const data = request.body;
        const [id] = await connection('users')
            .returning('id')
            .insert(data);
        return response.json({ id });
    },

    async delete(request, response){        
        const { id } = request.params;    
        const [ exists ] = await connection('users').where('id', id).select(1);
        if(!exists){
            return response.status(404).send();
        }
        await connection('users').where('id', id).delete();
        return response.status(204).send();
    }
};
