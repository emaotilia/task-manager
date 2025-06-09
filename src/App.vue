<script setup>
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div>
    <NavBar />
    <router-view />
    <AppFooter>
      <p>Task Manager App by Tiron Emanuela @2025</p>
    </AppFooter>
  </div>
</template>
