<script lang="ts">
	import ProjectCard from '$lib/projectsPreview/projectCard/ProjectCard.svelte';
	import { loadProjects } from '$lib/utility/StaticDataLoader';
	import { onMount } from 'svelte';

	let projectLibrary: ProjectLibrary;

	let projectsLoaded = false;

	onMount(async () => {
		projectLibrary = await loadProjects();
		projectsLoaded = true;
	});
</script>

<div id="projects">
	{#if projectsLoaded}
		{#each projectLibrary.projects as project}
            
			<ProjectCard {project} />
            
		{/each}
	{/if}
</div>
