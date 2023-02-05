<script lang="ts">
	import ProjectCard from "./Components/ProjectCard.svelte";

    export let projectsLibrary:ProjectLibrary;
</script>


<div id="note-worthy-projects">
    <p class="section-title">Note Worthy Projects</p>

    <div class="projects-flex-container">
        {#each projectsLibrary.noteWorthy as project}
            <ProjectCard project={project} />
        {/each}
    </div>
</div>