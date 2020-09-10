<script lang="ts">
import Vue from 'vue';
import { Publisher } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  data(){
    return {
      result: {},
    }
  },
  components: {
    Publisher,
  }
});
</script>

<template>
  <div id="app">
    <Publisher v-model="result" />

    <textarea v-model="result" />
  </div>
</template>
