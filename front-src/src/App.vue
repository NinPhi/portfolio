<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  --vertical-space: 3rem;
  --wide-mode-vertical-space: 0rem;
  --horizontal-space: 1.5rem;

  margin-left: auto;
  margin-right: auto;

  padding-left: var(--horizontal-space);
  padding-right: var(--horizontal-space);

  padding-top: var(--vertical-space);
  padding-bottom: var(--vertical-space);
}

@media (min-width: 768px) {
  .container {
    --vertical-space: 5rem;
    --horizontal-space: 3rem;
  }
}

@media (min-width: 1024px) {
  .container {
    --vertical-space: 0rem;
    --wide-mode-vertical-space: 6rem;
    --horizontal-space: 6rem;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
</style>
