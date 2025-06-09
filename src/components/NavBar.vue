<template>
    <nav>
        <div class="left-links">
            <router-link to="/">Home</router-link>
            <router-link to="/tasks">Tasks</router-link>
            <router-link to="/tasks/new">New Task</router-link>
            <router-link to="/statistics">Statistics</router-link>
        </div>
        <div class="right-links">
          <button
            class="icon-button"
            @click="toggleTheme"
            :title="isDark ? 'Toggle light mode' : 'Toggle dark mode'"
          >
            {{ isDark ? '☀️' : '🌙' }}
          </button>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const darkMode = ref(false);

const toggleTheme = () => {
    darkMode.value = !darkMode.value;
    document.body.className = darkMode.value ? 'dark' : '';
};

const isDark = darkMode;
ref(() => document.body.classList.contains('dark'));
import { onMounted } from 'vue';
onMounted(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        darkMode.value = true;
        document.body.classList.add('dark');
    }
});

</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #a8f5b9;
    color: rgb(141, 45, 101);
}

.left-links a {
    color: rgb(141, 45, 101);
    margin-right: 1rem;
    text-decoration: none;
}

.left-links a.router-link-active {
    font-weight: bold;
    text-decoration: underline;
}

.right-links {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.icon-button {
    background-color: #7d3486;
    border: none;
    padding: 0.5rem;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    line-height: 1;
}

.logout {
    background-color: #e74c3c;
    border: none;
    padding: 0.5rem 0.8rem;
    color: white;
    cursor: pointer;
    border-radius: 4px;
}

.icon-button:hover {
    background-color: #290c3a;
}

.logout:hover {
    background-color: #c0392b;
}

.dark nav {
    background-color: #338671;
    color: #f3d5ff;
}

.dark .left-links a {
    color: #f3d5ff;
}
.dark .icon-button {
    background-color: #c532a0;
}
.dark .icon-button:hover {
    background-color: #e7abd0;
}
</style>
