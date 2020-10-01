<template>
	<div>
		<ul class="list">
			<li class="item" v-for="(item, i) in value" :key="i">{{item}}</li>
		</ul>

		<form class="insert" @submit.prevent="insert">
			<slot name="new">
				<input class="input" type="text" v-model="newItem" />
			</slot>
		</form>
	</div>
</template>

<script>
export default {
	props: {
		value: Array,
	},
	watch: {
		value: {
			immediate: true,
			handler(value){
				this.$emit("input", value)
			}
		}
	},
	data(){
		return {
			newItem: "",
		}
	},
	methods: {
		insert(e){
			this.value.push(this.newItem)
			this.afterInsert(this.newItem, this.value)
		},
		afterInsert(value, list){
			this.newItem = "";
		}
	}
};
</script>

<style>
</style>