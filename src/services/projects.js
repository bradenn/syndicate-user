import Projects from '../models/projects'

export default {

    async createProject(project) {
        return await Projects.create(project)
            .then(project => {
                return {project};
            })
            .catch(error => {
                return {error};
            });
    },
    async getProject(id) {
        return await Projects.findById(id)
            .then(project => {
                return {project};
            })
            .catch(error => {
                return {error};
            });
    },
    async updateProject(id, body) {
        return await Projects.findByIdAndUpdate(id, body)
            .then(project => {
                return {project};
            })
            .catch(error => {
                return {error};
            });
    },
    async deleteProject(id) {
        return await Projects.findByIdAndDelete(id)
            .then(project => {
                return {project};
            })
            .catch(error => {
                return {error};
            });
    }

}
