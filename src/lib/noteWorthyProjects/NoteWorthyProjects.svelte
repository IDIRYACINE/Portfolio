<script lang="ts">
	import FadeInWidget from '$lib/utilityWidgets/FadeInWidget.svelte';
	import ProjectCard from './Components/ProjectCard.svelte';

	export let projectsLibrary: ProjectLibrary;
</script>

<div id="note-worthy-projects">
	<p class="section-title">Note Worthy Projects</p>

	<div class="projects-flex-container">
		{#each projectsLibrary.noteWorthy as project}
			<FadeInWidget>
				<ProjectCard {project} /></FadeInWidget
			>
		{/each}
	</div>
</div>
