<script setup>
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter>
      <p>Task Manager App by Tiron Emanuela Otilia @2025</p>
    </AppFooter>
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; 
}
</style>
