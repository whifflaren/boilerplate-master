<template>
  <div class="app">
    <div class="header">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <img src="/vue.svg" class="logo vue" alt="Vue logo" />
    </div>
    <h1>Vue + Vite</h1>
    <div class="card">
      <button @click="increment">count is {{ count }}</button>
      <p>
        Edit <code>src/App.vue</code> and save to test HMR
      </p>
    </div>
    <p class="read-the-docs">
      Click on the Vite and Vue logos to learn more
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    return {
      count,
      increment
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .logo.vue {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
</style>
