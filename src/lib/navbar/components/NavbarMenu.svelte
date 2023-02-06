<script lang="ts">
	import Sidebar from './Sidebar.svelte';

	let open = false;

	function toggleScrollLock(locked:boolean) {
		const classList = document.body.classList;
		if (locked) {
			classList.add('scroll-lock');
		} else {
			classList.remove('scroll-lock');
		}
	}

	function onHrefClicked(){
		open = false;
		toggleScrollLock(false)
	}

	function toggleMenu(e: EventTarget & HTMLButtonElement) {
		open = !open;
		const classList = e.classList;
		if (open) {
			classList.add('rotate-animation');
			classList.add('fa-home');
			classList.remove('fa-bars');
		} else {
			classList.remove('fa-home');
			classList.add('fa-bars');
			classList.add('rotate-animation');
		}
		toggleScrollLock(open);
		setTimeout(() => classList.remove('rotate-animation'), 3000);
	}
</script>

<Sidebar onHrefClicked={onHrefClicked} bind:open />

<button
	on:click={(e) => toggleMenu(e.currentTarget)}
	class="nav-menu icon alt-2 fa-bars mr-2 mt-2"
	class:open
/>
