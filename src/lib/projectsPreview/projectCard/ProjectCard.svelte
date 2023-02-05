<script lang="ts">
	import CardAction from './CardAction.svelte';

	export let project: Project;
	export let rightToLeftProject: boolean;

	let positionOverviewToRight: boolean;
	let positionOverviewToLeft: boolean;

	let positionImageToLeft: boolean;
	let positionImageToRight: boolean;

	if (rightToLeftProject === true) {
		positionOverviewToRight = false;
		positionOverviewToLeft = true;

		positionImageToLeft = false;
		positionImageToRight = true;
	} else {
		positionOverviewToRight = true;
		positionOverviewToLeft = false;

		positionImageToLeft = true;
		positionImageToRight = false;
	}
</script>

<div class="project-card">
	<div
		class="project-overview"
		class:rightPosition={positionOverviewToRight}
		class:leftPosition={positionOverviewToLeft}
	>
		<div class="featured-project-header">
			<p class="featured-project-label">featured project</p>
			<p class="featured-project-title">
				{project.name}
			</p>
		</div>
		<div class="featured-project-content">
			{#each project.previewDescription as paragraph}
				<p class="featured-project-paragraph">
					{paragraph}
				</p>
			{/each}
		</div>
		<div class="featured-project-footer">
			<div class="featured-project-tags">
				{#each project.tags as tag}
					<span class="featured-project-tag">{tag}</span>
				{/each}
			</div>
			<div class="featured-project-actions">
				{#each project.actions as action}
					<CardAction {action} />
				{/each}
			</div>
		</div>
	</div>

	<div
		class="featured-img-container"
		class:rightPosition={positionImageToRight}
		class:leftPosition={positionImageToLeft}
	>
		<img class="featured-project-image" src={project.previewImage} alt="" />
		<div class="image-filter" />

	</div>
</div>
