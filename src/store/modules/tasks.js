import axios from 'axios';
const api = 'http://localhost:3001/tasks';

export default {
    namespaced: true,
    state: () => ({
        tasks: []
    }),

    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            state.tasks.push(task);
        },
        updateTask(state, updatedTask) {
            const index = state.tasks.findIndex(t => t.id === updatedTask.id);
            if (index !== -1) state.tasks.splice(index, 1, updatedTask);
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(t => t.id !== id);
        },
        toggleComplete(state, id) {
            const task = state.tasks.find(t => t.id === id);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
    },
    actions: {
        async fetchTasks({ commit, state }) {
            const { data } = await axios.get(`${api}`);
            commit('setTasks', data);
        },
        async createTask({ commit, state }, task) {
            task.id = Date.now();
            task.isCompleted = false;
            const { data } = await axios.post(api, task);
            commit('addTask', data);
        },
        async updateTask({ commit }, updatedTask) {
            const { data } = await axios.put(`${api}/${updatedTask.id}`, updatedTask);
            commit('updateTask', data);
        },
        async deleteTask({ commit }, id) {
            await axios.delete(`${api}/${id}`);
            commit('deleteTask', id);
        },

        toggleComplete({ commit }, id) {
            commit('toggleComplete', id);
        },
    },
    getters: {
        getTasks: state => {
            return state.tasks
        },
        getTask: state => id => state.tasks.find(t => t.id == id),

    }

}
