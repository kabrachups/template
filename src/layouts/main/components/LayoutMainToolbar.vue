<template>
	<q-toolbar>
		<q-btn
			dense
			flat
			round
			icon="menu"
			@click="layoutMainStore.leftDrawerOpen = !layoutMainStore.leftDrawerOpen"
		/>

		<q-toolbar-title>
			Some title
		</q-toolbar-title>
	</q-toolbar>
</template>

<script setup lang="ts">
import {useLayoutMainStore} from "../../../stores/store_layout_main";

const layoutMainStore = useLayoutMainStore()

</script>

<style scoped>

</style>
