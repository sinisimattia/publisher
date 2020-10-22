<template>
	<div>
		<ul class="editor">
			<li class="content" v-for="(item, i) in value" :key="i">
				<slot name="item" :item="item">
					<span class="item" v-for="key in Object.keys(item)" :key="key">{{
						item[key]
					}}</span>
				</slot>

				<span class="commands">
					<slot name="commands">
						<button type="button" @click="remove(i)">
							<slot name="remove">Remove</slot>
						</button>
					</slot>
				</span>
			</li>
		</ul>

		<form ref="form" class="commands" @submit.prevent="insert">
			<slot name="new">
				<span v-if="select">
					<select
						class="input"
						v-for="key in Object.keys(newItem)"
						:key="key"
						:placeholder="key"
						v-model="newItem[key]"
					>
						<option disabled selected>
							<slot name="defaultSelection" :selected="key">
								Select {{key}}
							</slot>
						</option>

						<option v-for="(choice, i) in choices[key]" :key="`${key}-choice-${i}`" :value="choice">{{choice}}</option>
					</select>
				</span>

				<span v-else>
					<input
						class="input"
						type="text"
						v-for="key in Object.keys(newItem)"
						:key="key"
						:placeholder="key"
						v-model="newItem[key]"
					/>
				</span>
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
		default: {
			type: Object,
			default: () => {
				return {
					type: "",
					content: "",
				};
			},
		},
		select: {
			type: Boolean,
			default: false,
		},
		choices: {
			type: Object,
			default: () => {
				return {
					type: ["type1", "type2"],
					content: ["content1", "content2"],
				}
			},
		},
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
			newItem: {},
		};
	},
	methods: {
		insert(e) {
			let newItem = { ...this.newItem };
			this.value.push(newItem);
			this.afterInsert(newItem, this.value);
		},
		remove(i) {
			var list = this.value;
			list.splice(i, 1);
			this.$emit("input", list);
		},
		afterInsert(value, list) {
			this.newItem = { ...this.default };
		},
		afterRemove(index, list) {},
	},
	mounted() {
		this.newItem = { ...this.default };
	},
};
</script>
