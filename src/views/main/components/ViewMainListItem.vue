<template>
	<q-item clickable @click="$emit('increment')" v-ripple>
		<q-item-section avatar>
			<q-avatar rounded>
				<q-img :src="src" fit="cover"/>
			</q-avatar>
		</q-item-section>
		<q-item-section class="sm-hide xs-hide">
			<q-item-label>
				{{ author }}
			</q-item-label>
			<q-item-label caption>
				{{ id }}
			</q-item-label>
		</q-item-section>
		<q-item-section avatar class="xs-hide">
			<div class="row">
				<div class="col-6 q-pa-sm">
					<q-icon name="ads_click"/>
				</div>
				<div class="col-6 q-pa-sm">
					{{counter}}
				</div>
			</div>

		</q-item-section>
	</q-item>
	<q-separator/>
</template>

<script setup lang="ts">
const props = defineProps(
    {
        id: Number,
        author: String,
        src: String,
        counter: Number,
    }
)

const emit = defineEmits(['increment'])
</script>

<style scoped>

</style>
