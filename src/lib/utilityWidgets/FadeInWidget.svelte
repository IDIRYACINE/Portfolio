<script lang="ts">
	import { inview } from 'svelte-inview';

	const options = {};

	let el: HTMLDivElement;

	function toggleVisibilty(visible: boolean) {
		const classList = el.classList;

		if (visible) {
			classList.add('visible');

		} else {
			classList.remove('visible');
		}
	}

	function handleChange(event: CustomEvent<ObserverEventDetails>): void {
		const visible = event.detail.inView;
		toggleVisibilty(visible);
	}

</script>

<div use:inview={options}  on:enter={handleChange}>
	<div bind:this={el} class="fade-wrapper">
		<slot/>
	</div>
</div>
