<template>
  <div>
    <div class="container">
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div>
          <button
            class="button is-light"
            :class="{ 'is-primary': isActive.bold() }"
            @click="commands.bold"
          >
            <b>B</b>
          </button>

          <button
            class="button is-light"
            :class="{ 'is-primary': isActive.italic() }"
            @click="commands.italic"
          >
            <i>I</i>
          </button>

          <button
            class="button is-light"
            :class="{ 'is-primary': isActive.code() }"
            @click="commands.code"
          >@</button>

          <button
            class="button is-light"
            :class="{ 'is-primary': isActive.code_block() }"
            @click="commands.code_block"
          >[@]</button>
        </div>
      </editor-menu-bar>

      <div class="box">
        <editor-content :editor="editor" class="editor" />
      </div>
    </div>
  </div>
</template>

<script>
import { EditorContent, EditorMenuBar, Editor } from "tiptap";
import { Bold, Code, CodeBlock, Italic } from "tiptap-extensions";
import { Renderer } from "prosemirror-to-html-js";

export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data() {
    return {
      editor: {},
      result: "",
    };
  },
  mounted() {
    const renderer = new Renderer();

    this.editor = new Editor({
      extensions: [
        new Bold(),
        new Code(),
        new CodeBlock(),
        new Italic(),
      ],
      onUpdate: ({ getJSON }) => {
        this.result = (getJSON());
      },
    });

    console.log(this.editor);
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style scoped lang="scss">
.editor {
  padding: 10px 20px;
}
</style>
