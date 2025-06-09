import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import tasks from './modules/tasks';

export default createStore({
    modules: {
        tasks
    },
    plugins: [createPersistedState()]
});
