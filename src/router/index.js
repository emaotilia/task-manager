import { createRouter, createWebHistory } from 'vue-router';
import TasksPage from '../views/TasksPage.vue';
import TaskFormPage from '../views/TaskFormPage.vue';
import TaskDetailsPage from '../views/TaskDetailsPage.vue';
import HomePage from '../views/HomePage.vue';
import StatisticsPage from '@/views/StatisticsPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/tasks', component: TasksPage },
    { path: '/tasks/:id', component: TaskDetailsPage, props: true },
    { path: '/tasks/update/:id', component: TaskFormPage, props: true },
    { path: '/tasks/new', component: TaskFormPage },
    { path: '/statistics', component: StatisticsPage },

]

const router = createRouter({ history: createWebHistory(), routes });

export default router;
