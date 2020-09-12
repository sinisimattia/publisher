<script lang="ts">
import Vue from 'vue';
import { Publisher, Reader } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  data(){
    return {
      result: {},
    }
  },
  components: {
    Publisher,
    Reader,
  }
});
</script>

<template>
  <div id="app">
    <Publisher v-model="result">
      <template #bold>Bold</template>
    </Publisher>
    <Reader v-model="result" />
  </div>
</template>
