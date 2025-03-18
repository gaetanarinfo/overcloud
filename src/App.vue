<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <!-- Page Preloder -->
  <div id="preloder">
    <div class="loader"></div>
  </div>

  <RouterView />
</template>
