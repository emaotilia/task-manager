<script setup>
const props = defineProps({ task: Object });
const emit = defineEmits(['update', 'delete', 'toggle']);
</script>

<template>
    <div class="task-card">
        <h3>
            <span :style="{ textDecoration: task.isCompleted ? 'line-through' : 'none' }">
                {{ task.title }}
            </span>
        </h3>
        <p>{{ task.description }}</p>
        <button @click="emit('update', task)">Edit</button>
        <button @click="emit('delete', task.id)">Delete</button>
    </div>
</template>