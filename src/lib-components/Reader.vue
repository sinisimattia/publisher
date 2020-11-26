<template>
    <div class="content" v-html="result"></div>
</template>

<script>
import { Renderer } from 'prosemirror-to-html-js'
import IFrame from '@/custom-nodes/reader/IFrame'

const renderer = new Renderer()

export default {
    props: {
        value: Object,
    },
    data(){
        return {
            result: String,
        }
    },
    mounted() {
        renderer.addNode(IFrame)
    },
    watch:{
        value: {
            immediate: true,
            handler(value){
                this.result = renderer.render(value)
            }
        }
    }
}
</script>