<script lang="ts">
	import { range } from '$lib/utility/Range';
	import { experienceState } from '../states/experienceState';

	export let titles: string[];
	let el: HTMLElement;
	const activeClassName = 'selected';

	$: selectedTab = 0;

	let lastSelected = 0;

	function onTitleClick(index: number): void {
		if (index !== selectedTab) {
			lastSelected = selectedTab;
			selectedTab = index;
			el.children.item(index)?.classList.add(activeClassName);
		}

		if (lastSelected !== selectedTab) {
			el.children.item(lastSelected)?.classList.remove(activeClassName);
		}

        updateSelected()
	}

	function updateSelected() {
		experienceState.update((value) => {
			return { selectedTab: selectedTab };
		});
	}
</script>

<div bind:this={el} class="experience-tab">
	<button class="experience-title selected" on:click={(e) => onTitleClick(0)}>
		<span>{titles[0]}</span>
	</button>
	{#each range(1, titles.length, 1) as index}
		<button class="experience-title" on:click={(e) => onTitleClick(index)}>
			<span>{titles[index]}</span>
		</button>
	{/each}
</div>
