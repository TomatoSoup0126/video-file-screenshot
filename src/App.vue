<script setup>
import { screenshot } from '@/utils/screenshot';
import { ref } from 'vue';


const imagePath = ref('');

const getScreenshot = async (e) => {
  const file = e.target.files[0];
  const res = await screenshot(URL.createObjectURL(file));
  imagePath.value = res;
}
</script>

<template>
  <input
    type="file"
    @change="getScreenshot"
  />
  <div v-if="imagePath">
    <p>↓ print screen shot ↓</p>
    <img :src="imagePath" alt="screenshot" />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
