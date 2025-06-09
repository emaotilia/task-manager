<template>
    <main>
        <h2>{{ isUpdating ? 'Update Task' : 'Add Task' }}</h2>
        <TaskForm :modelValue="task" :isUpdating="isUpdating" @submit="handleSubmit" />
    </main>
</template>

<script setup>
import TaskForm from '../components/TaskForm.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const route = useRoute();
const router = useRouter();

const id = route.params.id;
const task = computed(() => id ? store.getters['tasks/getTask'](id) : { title: '', description: '' });
const isUpdating = computed(() => !!id);

function handleSubmit(task) {
    if (isUpdating.value) {
        store.dispatch('tasks/updateTask', task);
    } else {
        store.dispatch('tasks/createTask', task);
    }
    router.push('/tasks');
}
</script>