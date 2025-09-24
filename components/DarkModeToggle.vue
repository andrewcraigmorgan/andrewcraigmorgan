<script setup>
import { useState, onMounted } from "#imports"

const isDarkMode = useState("darkMode", () => false)

onMounted(() => {
  const savedMode = localStorage.getItem("darkMode")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  isDarkMode.value = savedMode ? savedMode === "enabled" : prefersDark
  document.documentElement.classList.toggle("dark", isDarkMode.value)
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle("dark", isDarkMode.value)
  localStorage.setItem("darkMode", isDarkMode.value ? "enabled" : "disabled")
}
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

button:active {
  transform: scale(0.95);
}

span {
  font-size: 18px;
  transition: color 0.3s ease;
}

button.dark-mode span {
  color: white;
}

button span {
  color: #333;
}
</style>
