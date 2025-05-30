<!-- Script setup syntax -->
<script setup>

import { ref } from 'vue';
//Reactive variables
const message = ref('Hello, Vue 3!');
const welcome = ref('Welcome Vasile');
let counter = ref(0);

const languages = ref([{
  id: 1,
  language: 'JavaScript'
},
{
  id: 2,
  language: 'Python'
},
{
  id: 3,
  language: 'Java'
}]);

const newLanguage = ref(''); // Reactive variable for new language input

//holds the status of the application
let status = ref('active')
const increment = () => {
  counter.value = counter.value + 1; //update the counter
  console.log('Counter incremented:', counter.value);
};

// Function to change the status of the application
const changeStatus = () => {
  if (status.value == 'active') { // If the status is active, change it to pending
    status.value = 'pending';
  } else if (status.value == 'pending') { // If the status is pending, change it to inactive
    status.value = 'inactive';
  } else {
    status.value = 'active'; // If the status is inactive, change it back to active
  }
};

const addLanguage = () => {
  if (newLanguage.value.trim() !== '') //Check if the inpuit is not empty. Trim removed the whitespaces from the value added in UI
  {
    languages.value.push({
      id: languages.value[languages.value.length - 1].id + 1, // Generate a new ID based on the current length of the array 
      language: newLanguage.value
    })
  }
}
</script>


<!--  Template section -->
<template>
  <div>
    <h1>{{ welcome }}</h1>

    <p>Counter: {{ counter }}</p>
  </div>

  <!-- Increment the counter -->
  <button @click="increment()">Increment</button>

  <input v-model="message" placeholder="Type a message" />
  <p>{{ message }}</p>

  <!-- Display the message if it has content -->
  <span v-if="message.length > 0">
    You typed: {{ message }}
  </span>
  <span v-else>Nothing</span>

  <button @click="changeStatus()">Change status</button>

  <!-- Show status message -->
  <p>Status: {{ status }}</p>
  <span v-if="status == 'active'">Active</span>
  <span v-else-if="status == 'pending'">Pending</span>
  <span v-else>Inactive</span>




  <input v-model="newLanguage" placeholder="Add a new language" />
  <button @click="addLanguage()">Add language</button>


  <!-- v-for is a directive that allows you to iterate over arrays or objects in Vue.js. -->
  <h2>Languages</h2>
  <ul>
    <li v-for="item in languages" :key="item.id">
      {{ item.language }}
    </li>
  </ul>



</template>

<!-- Styling section -->
<style scoped>
h1 {
  color: blue;
}
</style>
