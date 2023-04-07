<script lang="ts">
	import FadeInWidget from '$lib/utilityWidgets/FadeInWidget.svelte';
	import ProjectCard from './Components/ProjectCard.svelte';

	export let projectsLibrary: ProjectLibrary;

	$: visibleProjectsCount = 3;
	$: displayViewButton = projectsLibrary.noteWorthy.length != visibleProjectsCount;

	function displayAll() {
		visibleProjectsCount = projectsLibrary.noteWorthy.length;
	}
</script>

<div id="note-worthy-projects">
	<p class="section-title">Note Worthy Projects</p>

	<div class="projects-flex-container">
		{#each Array(visibleProjectsCount) as _, index}
			<FadeInWidget>
				<ProjectCard project={projectsLibrary.noteWorthy[index]} /></FadeInWidget
			>
		{/each}
	</div>
	{#if displayViewButton}
		<div class="action-container">
			<button class="action" on:click={displayAll}>View all</button>
		</div>
	{/if}
</div>
