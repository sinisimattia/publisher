<template>
    <div class="content" v-html="result"></div>
</template>

<script>
import { Renderer } from 'prosemirror-to-html-js'

export default {
    props: {
        value: Object,
    },
    data(){
        return {
            renderer:  new Renderer(),
            result: String,
        }
    },
    watch:{
        value: {
            immediate: true,
            handler(value){
                this.result = this.renderer.render(value)
            }
        }
    }
}
</script>