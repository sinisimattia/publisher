<template>
    <div class="content" v-html="result"></div>
</template>

<script>
import { Renderer } from 'prosemirror-to-html-js'
import IFrame from '@/custom-nodes/reader/IFrame'

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
    mounted() {
        this.renderer.addNode(IFrame)
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