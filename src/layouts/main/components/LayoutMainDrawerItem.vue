<template>
	<q-item
		v-ripple
		:active="$route.path.endsWith('/main')"
		clickable
		:to="{ name: 'ViewMain' }"
	>
		<q-item-section avatar>
			<q-icon
				class="q-my-sm"
				:name="icon"
			/>
		</q-item-section>
		<q-item-section>
			<q-item-label>
				{{ label }}
			</q-item-label>
			<q-item-label caption>
				{{ caption }}
			</q-item-label>
		</q-item-section>
	</q-item>
</template>

<script setup lang="ts">
const props = defineProps(
    {
	    path: String,
        icon: String,
	    label: String,
	    caption: String,
    }
)
</script>

<style scoped>

</style>
