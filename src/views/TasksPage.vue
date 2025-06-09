<template>
    <main>
        <h2>My Tasks</h2>
        <TaskList :tasks="tasks" @update="updateTask" @delete="deleteTask" @toggle="toggleTask" />
    </main>
</template>

<script setup>
import TaskList from '../components/TaskList.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const tasks = computed(() => store.getters['tasks/getTasks']);

onMounted(() => {
    loadTasks();
});

const loadTasks = () => {
    store.dispatch('tasks/fetchTasks');
};

function updateTask(task) {
    router.push(`/tasks/edit/${task.id}`);
}

function deleteTask(id) {
    store.dispatch('tasks/removeTask', id);
}

function toggleTask(id) {
    store.dispatch('tasks/toggleComplete', id);
}
</script>