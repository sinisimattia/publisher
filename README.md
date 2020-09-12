# vue-publisher 🗞️
## A rich-text editor for Vue.js

Built on top of [TipTap](https://tiptap.dev). Kudos to them as well.

### Install

Get *Publisher* as an NPM package:

```bash
npm i -S vue-publisher
```

### Usage

The goal here is to keep everything as simple as possible, in fact, with just **2 components** you can have a publisher and a reader to render your finished article from its native JSON form.

```vue
<template>
  <div id="app">
    <Publisher v-model="result" />
    <Reader v-model="result" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Publisher, Reader } from 'vue-publisher';

export default Vue.extend({
  name: 'ExampleApp',
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
```

### Customization

These components provide useful CSS classes to customize the look of your editor. The class structure is as follows:

```scss
// The editor's internal container
.editor {
    // The commands container
    .commands {
        // The single command button
        button {
            background-color: red;
            // A button when its property is activated
            &.is-active {
                background-color: green;
            }
        }
    }
    // The editor itself
    .content {
        color: black;
    }
}

// The external component
.reader {
    // The content
    .content {
        color: black;
    }
}
```

### Conclusion

This package is just for a quick implementation of the [TipTap](https://tiptap.dev) editor for [Vue.js](https://vuejs.org).

So, please, feel free to check them!

---
Mini-project by [Mattia Sinisi](https://mattia.codes)
