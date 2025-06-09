<template>
    <nav>
        <div class="left-links">
            <router-link to="/">Home</router-link>
            <router-link to="/tasks">Tasks</router-link>
            <router-link to="/tasks/new">New Task</router-link>
            <router-link to="/profile">Profile</router-link>
            <router-link to="/stats">Stats</router-link>
        </div>
        <div class="right-links">
            <button class="icon-button" @click="toggleTheme" :title="'Toggle dark mode'">
                🌙
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
}

</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
}

.left-links a {
    color: white;
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
    background-color: #3498db;
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
    background-color: #2980b9;
}

.logout:hover {
    background-color: #c0392b;
}
</style>