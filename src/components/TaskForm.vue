<script setup>
import { reactive, toRefs } from 'vue';
const props = defineProps({
    modelValue: Object,
    isUpdating: Boolean
});
const emit = defineEmits(['submit']);

const task = reactive({ ...props.modelValue });

function handleSubmit() {
    emit('submit', task);
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <label>Title: <input v-model="task.title" required /></label>
        <label>Description: <textarea v-model="task.description" /></label>
        <button type="submit">{{ props.isUpdating ? 'Update' : 'Add' }} Task</button>
    </form>
</template>