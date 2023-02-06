<script lang="ts">
	import FadeInWidget from "$lib/utilityWidgets/FadeInWidget.svelte";


	export let project: Project;
</script>

<div class="note-worthy-project-card ">
	
	<div class="project-header">
			<span class="icon fa-folder" />
			<ul class="icons">
				{#each project.actions as action}
					<li>
						<a href={action.link} class={`icon ${action.icon}`}>
							<span class="label">{action.name}</span></a
						>
					</li>
				{/each}
			</ul>
	</div>

	<div class="project-content">
		<p class="project-title">{project.name}</p>
		{#each project.previewDescription as paragraph}
			<p class="project-paragraph">{paragraph}</p>
		{/each}
	</div>

	<div class="project-footer">
		<div class="project-tags">
			{#each project.tags as tag}
				<span class="project-tag">{tag}</span>
			{/each}
		</div>
	</div>
</div>
