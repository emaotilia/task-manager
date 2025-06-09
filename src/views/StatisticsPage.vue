<template>
    <main>
        <h2>Task Statistics</h2>
        <div class="task-card">
            <p><strong>Total Tasks:</strong> {{ tasks.length }}</p>
            <p><strong>Completed Tasks:</strong> {{ completedTasks }}</p>
        </div>
    </main>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const tasks = computed(() => store.getters['tasks/getTasks']);
const completedTasks = computed(() => tasks.value.filter(t => t.isCompleted).length);
</script>