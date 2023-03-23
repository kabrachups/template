<template>
	<div class="row">
		<div class="col-3 scroll container-height">
			<q-infinite-scroll @load="viewMainStore.getItems" :offset="250">
				<template v-slot:loading>
					<div class="row justify-center q-my-md">
						<q-spinner color="primary" name="dots" size="40px" />
					</div>
				</template>
				<ViewMainItem
					v-for="item in viewMainStore.items"
					:key="item.key"
					:id="item.id"
					:author="item.author"
					:src="item.imgSmall"
					:counter="item.counter"
					@increment="item.incrementCounter(); viewMainStore.item = item"
				/>
			</q-infinite-scroll>
		</div>
		<div class="col-9 text-center">
			<ViewMainCard/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useViewMainStore} from "../../stores/store_view_main";
import ViewMainItem from "./components/ViewMainListItem.vue";
import ViewMainCard from "./components/ViewMainCard.vue";
const viewMainStore = useViewMainStore()

onMounted(() => {
    viewMainStore.getItems(0, undefined)
})

</script>

<style scoped lang="sass">
.container-height
  height: calc(100vh - 56px)
</style>
