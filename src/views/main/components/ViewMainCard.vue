<template>
	<q-card
		flat
		class="q-pa-md"
	>
		<q-img
			v-if="viewMainStore.item"
			:src="viewMainStore.item.imgLarge"
			class="container-height"
			fit="cover"
		>
			<div class="absolute-bottom text-subtitle2 text-center">
				{{ viewMainStore.item.author }} (clicks: {{viewMainStore.item.counter }} )
			</div>
		</q-img>
		<div v-else>
			Nothing to show
		</div>
	</q-card>
</template>

<script setup lang="ts">
import {useViewMainStore} from "../../../stores/store_view_main";

const viewMainStore = useViewMainStore()

</script>

<style scoped lang="sass">
.container-height
  height: calc(100vh - 90px)
</style>
