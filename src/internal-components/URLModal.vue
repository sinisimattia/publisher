<template>
  <div class="modal" v-if="show" :key="show">
    <input v-model="url" class="input" /> <button @click="insert" class="button" :pattern="pattern">
      <slot>Create element</slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      command: null,
      show: false,
    };
  },
  methods: {
    showModal(command) {
      this.command = command;
      this.show = true;
    },
    insert() {
      if (this.url && this.pattern.test(this.url)) {
        const data = {
          command: this.command,
          data: {
            src: this.url,
          },
        };

        this.$emit("onConfirm", data);
        this.url = ''
        this.show = false;
      }
    },
  },
  props: {
    pattern: {
      type: RegExp,
      default: () => /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
    }
  },
};
</script>