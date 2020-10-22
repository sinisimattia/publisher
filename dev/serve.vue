<script lang="ts">
import Vue from "vue";
import { Publisher, Reader, ListEditor } from "@/entry";

export default Vue.extend({
	name: "ServeDev",
	data() {
		return {
			result: {},
			list: [],
			selectlist: [],
		};
	},
	components: {
		Publisher,
		Reader,
		ListEditor,
	},
});
</script>

<template>
	<div id="app">
		<Publisher v-model="result">
			<template #bold>Bold</template>
		</Publisher>
		<hr />
		<Reader v-model="result" />
		<hr />
		<ListEditor v-model="list" :default="{ id: '', name: '' }">
			<template v-slot:item="{ item }">
				{{ item.name }} (#{{ item.id }})
			</template>
		</ListEditor>

		<ListEditor
			v-model="selectlist"
			select
			:default="{ id: '', name: '' }"
			:choices="{
				id: [
					{
						name: 'First ID',
						value: 'id_1',
					},
				],
				name: [
					{
						name: 'First Name',
						value: 'name_1',
					},
				],
			}"
		>
			<template v-slot:item="{ item }">
				{{ item.name }} (#{{ item.id }})
			</template>

			<template v-slot:option="{ option }">
				{{option.name}} · {{option.value}}
			</template>
		</ListEditor>
	</div>
</template>
