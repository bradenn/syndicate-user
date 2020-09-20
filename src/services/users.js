import Users from '../models/users'

export default {

    async createUser(user) {
        return await Users.create(user)
            .then(user => {
                return {user};
            })
            .catch(error => {
                return {error};
            });
    },
    async getUser(id) {
        return await Users.findById(id)
            .then(user => {
                return {user};
            })
            .catch(error => {
                return {error};
            });
    },
    async updateUser(id, body) {
        return await Users.findByIdAndUpdate(id, body)
            .then(user => {
                return {user};
            })
            .catch(error => {
                return {error};
            });
    },
    async deleteUser(id) {
        return await Users.findByIdAndDelete(id)
            .then(user => {
                return {user};
            })
            .catch(error => {
                return {error};
            });
    }

}
