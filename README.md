# Publisher 🗞️
## A rich-text editor for Vue.js

Built on top of [TipTap](https://tiptap.dev). Kudos to them as well.

### Install

Get *Publisher* as an NPM package:

```bash
npm i -S [NAME]
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
import { Publisher, Reader } from '[PACKAGE NAME]';

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
// The external component
Publisher {
    // The editor's internal container
    .editor {
        // The commands container
        .commands {
            // The commands container
            .internal {
                // The single command button
                .button {
                    // A button when its property is activated
                    &.is-active{
                        //
                    }
                }
            }
        }
        // The editor itself
        .content {
            //
        }
    }
}

// The external component
Reader {
    // The content
    .content {
        // All the tags here
    }
}
```

### Conclusion

This package is just for a quick implementation of the [TipTap](https://tiptap.dev) editor for [Vue.js](https://vuejs.org).

So, please, feel free to check them!

---
Mini-project by [Mattia Sinisi](https://mattia.codes)
