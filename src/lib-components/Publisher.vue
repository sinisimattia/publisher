<template>
  <div class="editor">
    <editor-menu-bubble class="menububble" :editor="editor" @hide="hideLinkMenu" v-slot="{ commands, isActive, getMarkAttrs, menu }">
      <div
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >

        <form v-if="linkMenuIsActive" @submit.prevent="setLinkUrl(commands.link, linkUrl)">
          <input class="input" type="search" v-model="linkUrl" placeholder="https://" ref="linkInput" @keydown.esc="hideLinkMenu"/>
        </form>

        <template v-else>
          <button
            class="button"
            @click="showLinkMenu(getMarkAttrs('link'))"
            :class="{ 'is-active': isActive.link() }"
          >
            <span>
              <slot name="link">Add link</slot>
            </span>
          </button>
        </template>

      </div>
    </editor-menu-bubble>

    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="commands">
        <button
          type="button"
          :class="{ 'is-active': isActive.heading({level: 2}) }"
          @click="commands.heading({level: 2})"
        >
          <slot name="title">
            <span>Title</span>
          </slot>
        </button>

        <button
          type="button"
          :class="{ 'is-active': isActive.heading({level: 3}) }"
          @click="commands.heading({level: 3})"
        >
          <slot name="subtitle">
            <span>Subtitle</span>
          </slot>
        </button>

        <button
          type="button"
          :class="{ 'is-active': isActive.heading({level: 4}) }"
          @click="commands.heading({level: 4})"
        >
          <slot name="sectionTitle">
            <span>Section Title</span>
          </slot>
        </button>

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
            <span>Q</span>
          </slot>
        </button>

        <button
          type="button"
          @click="imagePrompt(commands.image)"
        >
          <slot name="image">
            <span>IMG</span>
          </slot>
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar, EditorMenuBubble } from "tiptap";
import { Bold, Italic, Blockquote, Heading, Link, Image } from "tiptap-extensions";

export default {
  components: {
    EditorMenuBar,
    EditorContent,
    EditorMenuBubble,
  },
  props: {
    value: Object,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Bold(),
          new Italic(),
          new Blockquote(),
          new Heading({
            levels: [2, 3, 4],
          }),
          new Link(),
          new Image(),
        ],
        onUpdate: ({ getJSON }) => {
          this.$emit("input", getJSON());
        },
      }),
      linkUrl: null,
      linkMenuIsActive: false,
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href
      this.linkMenuIsActive = true
      this.$nextTick(() => {
        this.$refs.linkInput.focus()
      })
    },
    hideLinkMenu() {
      this.linkUrl = null
      this.linkMenuIsActive = false
    },
    setLinkUrl(command, url) {
      command({ href: url })
      this.hideLinkMenu()
    },
    imagePrompt(command){
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(value) {
        let { from, to } =(this.editor.state.selection)
        this.editor.setContent(value);
        this.editor.setSelection(from, to)
      },
    },
  },
};
</script>

<style scoped lang="scss">
.editor {
  position: relative;
}

.menububble {
  position: absolute;
  z-index: 20;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;

  &.is-active {
    opacity: 1;
    visibility: visible;
  }
}
</style>