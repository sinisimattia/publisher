<template>
  <div class="editor">
    <editor-menu-bar class="commands" :editor="editor" v-slot="{ commands, isActive }">
      <div>
        <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
          <b>B</b>
        </button>

        <button :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
          <i>I</i>
        </button>

        <button :class="{ 'is-active': isActive.blockquote() }" @click="commands.blockquote">
          Q
        </button>
      </div>
    </editor-menu-bar>

    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Bold, Italic, Blockquote } from 'tiptap-extensions'

export default {
  components: {
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Bold(),
          new Italic(),
          new Blockquote(),
        ],
        onUpdate({getJSON}){
          //
        }
      }),
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>