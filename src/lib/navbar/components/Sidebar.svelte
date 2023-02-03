<script lang="ts">
	import NavbarContent from './NavbarContent.svelte';

	export let onHrefClicked : () => void;
	export let open: boolean;



</script>

<aside class="absolute w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<NavbarContent toggleSideBarIfExists={onHrefClicked}/>
</aside>

<style>
	aside {
		right: -100%;
		transition: right 0.3s ease-in-out;
	}

	.open {
		right: 0;
	}
</style>
