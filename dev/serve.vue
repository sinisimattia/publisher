<script lang="ts">
import Vue from 'vue';
import { Publisher, Reader, ListEditor } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  data(){
    return {
      result: {},
      list: [],
    }
  },
  components: {
    Publisher,
    Reader,
    ListEditor,
  }
});
</script>

<template>
  <div id="app">
    <Publisher v-model="result">
      <template #bold>Bold</template>
    </Publisher>
    <hr>
    <Reader v-model="result" />
    <hr>
    <ListEditor v-model="list" :default="{id: '', name: ''}"/>
  </div>
</template>
