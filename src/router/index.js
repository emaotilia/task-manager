import { createRouter, createWebHistory } from 'vue-router';
import TasksPage from '../views/TasksPage.vue';
import TaskFormPage from '../views/TaskFormPage.vue';
import TaskDetailsPage from '../views/TaskDetailsPage.vue';
import HomePage from '../views/HomePage.vue';
const routes = [
    { path: '/', component: HomePage },
    { path: '/tasks', component: TasksPage },
    { path: '/tasks/:id', component: TaskDetailsPage, props: true },
    { path: '/tasks/edit/:id', component: TaskFormPage, props: true },
    { path: '/tasks/new', component: TaskFormPage }
]

const router = createRouter({ history: createWebHistory(), routes });

export default router;
