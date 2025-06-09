import axios from 'axios';
const api = 'http://localhost:3001/tasks';

export default {
    namespaced: true,
    state: {
        tasks: []
    },

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
            const { tasks } = await axios.get(`${api}`);
            commit('setTasks', tasks);
        },
        async createTask({ commit, state }, task) {
            task.id = Date.now();
            task.isCompleted = false;
            const { newTask } = await axios.post(api, task);
            commit('addTask', newTask);
        },
        updateTask({ commit }, updatedTask) {
            commit('updateTask', updatedTask);
        },

        deleteTask({ commit }, id) {
            commit('deleteTask', id);
        },

        toggleComplete({ commit }, id) {
            commit('toggleComplete', id);
        },
    },
    getters: {
        getTasks: state => state.tasks,
        getTaskById: (state) => (id) => {
            return state.tasks.find(task => task.id === id);
        }
    }

}
