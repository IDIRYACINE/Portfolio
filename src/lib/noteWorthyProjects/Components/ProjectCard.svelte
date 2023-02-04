<script lang="ts">
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

	<p class="project-title">{project.name}</p>

	<div class="footer">
		<p class="project-description">{project.previewDescription}</p>

		<div class="project-tags">
			{#each project.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</div>
