<template>
  <div class="modal" v-if="show">
    <input v-model="url" /> <button @click="insert">Add Video</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      command: null,
      show: false
    };
  },
  methods: {
    showModal(command) {
      this.command = command;
      this.show = true;
    },
    insert() {
      const data = {
        command: this.command,
        data: {
          src: this.url
        }
      };

      this.$emit("onConfirm", data);
      this.show = false;
    }
  }
};
</script>