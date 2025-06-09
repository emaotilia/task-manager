<script setup>
import { reactive, toRefs } from 'vue';
const props = defineProps({
    modelValue: Object,
    isUpdating: Boolean
});
const emit = defineEmits(['submit']);

const task = reactive({ ...props.modelValue });

const errors = reactive({ title: '' });

function validateForm() {
    let valid = true;
    errors.title = '';

    if (!task.title?.trim()) {
        errors.title = 'Oops! Please add a title';
        valid = false;
    }
    return valid;
}

function handleSubmit() {
  if (!validateForm()) return;
  emit('submit', task);
}
</script>

<template>
    <form @submit.prevent="handleSubmit" novalidate>
        <label>Title: <input v-model="task.title" required /></label>
        <span v-if="errors.title" class="task-error-message">Oops! Title is required!</span>
        <label>Description: <textarea v-model="task.description" /></label>
        <button type="submit">{{ props.isUpdating ? 'Update' : 'Add' }} Task</button>
    </form>
</template>
