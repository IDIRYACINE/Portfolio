<script lang="ts">
	import NavbarContent from './NavbarContent.svelte';

	export let onHrefClicked : () => void;
	export let open: boolean;



</script>

<aside class="w-full h-full bg-gray-200 border-r-2 shadow-lg" class:open>
	<NavbarContent toggleSideBarIfExists={onHrefClicked}/>
</aside>

