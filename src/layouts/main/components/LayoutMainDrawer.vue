<template>
	<q-drawer
		v-model="layoutMainStore.leftDrawerOpen"
		side="left"
		:mini="miniState"
		bordered
		mini-to-overlay
		show-if-above
		@mouseout="miniState = true"
		@mouseover="miniState = false"
		:width='200'
		class="bg-blue-grey-1"
	>
		<LayoutMainDrawerItem
			v-for="item in layoutMainStore.leftDrawerItems"
			:path="item.path"
			:icon="item.icon"
			:label="item.label"
			:caption="item.caption"
		/>
	</q-drawer>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useLayoutMainStore} from "../../../stores/store_layout_main";
import LayoutMainDrawerItem from "./LayoutMainDrawerItem.vue";

const layoutMainStore = useLayoutMainStore()
const miniState = ref(true)

</script>

<style scoped>

</style>
