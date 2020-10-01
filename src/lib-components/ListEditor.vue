<template>
	<div>
		<ul class="editor">
			<li class="content" v-for="(item, i) in value" :key="i">
				<span class="item">{{ item }}</span>
				<span class="commands">
					<slot name="commands">
						<button type="button" @click="remove(i)">Remove</button>
					</slot>
				</span>
			</li>
		</ul>

		<form class="insert" @submit.prevent="insert">
			<slot name="new">
				<input class="input" type="text" v-model="newItem" />
			</slot>

			<slot name="submit">
				<button type="submit">Add</button>
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
			handler(value) {
				this.$emit("input", value);
			},
		},
	},
	data() {
		return {
			newItem: "",
		};
	},
	methods: {
		insert(e) {
			this.value.push(this.newItem);
			this.afterInsert(this.newItem, this.value);
		},
		remove(i) {
			var list = this.value
			list.splice(i, 1)
			this.$emit("input", list)
		},
		afterInsert(value, list) {
			this.newItem = "";
		},
		afterRemove(index, list) {},
	},
};
</script>

<style>
</style>