<script setup>
import { useState, onMounted } from "#imports";

// Store dark mode state
const isDarkMode = useState("darkMode", () => false);

// Toggle dark mode
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle("dark", isDarkMode.value);
    localStorage.setItem("darkMode", isDarkMode.value ? "enabled" : "disabled");
};

// Detect system preference and stored user preference
onMounted(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode) {
        isDarkMode.value = savedMode === "enabled";
    } else {
        // Use system preference if no saved preference
        isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    // Apply the class
    document.documentElement.classList.toggle("dark", isDarkMode.value);
});
</script>

<template>
    <button @click="toggleDarkMode" :class="{ 'dark-mode': isDarkMode }">
        <span v-if="isDarkMode">☀️</span>
        <span v-else>🌙</span>
    </button>
</template>

<style scoped lang="less">
button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

button:active {
  transform: scale(0.95);
}

span {
  font-size: 20px;
  transition: color 0.3s ease;
}

button.dark-mode span {
  color: white;
}

button span {
  color: #333;
}
</style>
