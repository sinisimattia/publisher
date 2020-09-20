<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="commands">
        <button type="button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
          <slot name="bold">
            <b>B</b>
          </slot>
        </button>

        <button type="button" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
          <slot name="italic">
            <i>I</i>
          </slot>
        </button>

        <button
          type="button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <slot name="blockquote">
            <spam>Q</spam>
          </slot>
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import { Bold, Italic, Blockquote } from "tiptap-extensions";

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  props: {
    value: Object,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [new Bold(), new Italic(), new Blockquote()],
        onUpdate: ({ getJSON }) => {
          this.$emit("input", getJSON());
        },
      }),
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(value) {
        this.editor.setContent(value);
        this.$emit("input", value);
      },
    },
  },
};
</script>