<script lang="ts">
import Vue from 'vue';
import { Publisher } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Publisher,
  }
});
</script>

<template>
  <div id="app">
    <Publisher />
  </div>
</template>
