<template>
    <footer class="footer">
        <slot />
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
    padding: 1rem;
    text-align: center;
    background-color: #ffd7f6;
    color: rgb(138, 53, 102);
    margin-top: auto;
}

.dark .footer {
    background-color: #c532a0;
    color: #e7abd0;
    margin-top: auto; 
}
</style>
