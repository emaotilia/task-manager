<script setup>
import TaskItem from './TaskItem.vue';

const props = defineProps({ tasks: Array });
const emit = defineEmits(['update', 'delete', 'toggle']);
</script>

<template>
    <div>
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" @edit="emit('update', $event)"
            @delete="emit('delete', $event)" @toggle="emit('toggle', $event)" />
    </div>
</template>