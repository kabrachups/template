<template>
	<q-layout view="hHh lpr lff">

		<q-header class="bg-blue-grey-10 text-white">
			<LayoutMainToolbar/>
		</q-header>

		<LayoutMainDrawer/>

		<q-page-container>
			<router-view />
		</q-page-container>

	</q-layout>
</template>

<script setup lang="ts">
import LayoutMainDrawer from "./components/LayoutMainDrawer.vue";
import LayoutMainToolbar from "./components/LayoutMainToolbar.vue";


</script>
