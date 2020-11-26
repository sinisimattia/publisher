<template>
    <Publisher v-model="result" :editable="false"/>
</template>

<script>
import Publisher from "@/lib-components/Publisher"

export default {
    components: {
        Publisher,
    },
    props: {
        value: Object,
    },
    data(){
        return {
            result: {},
        }
    },
    watch:{
        value: {
            immediate: true,
            handler(value){
                this.result = value
            }
        }
    }
}
</script>