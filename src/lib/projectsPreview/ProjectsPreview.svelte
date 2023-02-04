<script lang="ts">
	import ProjectCard from '$lib/projectsPreview/projectCard/ProjectCard.svelte';
	import { range } from '$lib/utility/Range';
	

	export let projectsLibrary: ProjectLibrary;

	function getProject(index: number): Project {
		return projectsLibrary.projects[index];
	}

</script>

<div class="portfolio-section" id="featured-projects">
	
	<p class="section-title">Projects</p>

	<div class="section-content">
		
		{#each range(0, projectsLibrary.projects.length,1) as index}
			{#if index % 2 === 0}
				<ProjectCard project={getProject(index)} rightToLeftProject={false} />
			{:else}
				<ProjectCard project={getProject(index)} rightToLeftProject={true} />
			{/if}
			
		{/each}
	</div>
            
</div>
