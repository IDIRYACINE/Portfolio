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
		<p class="featured-project-label">featured project</p>
		<p class="featured-project-title">
			{project.name}
		</p>

		<p class="featured-project-description">
			{project.previewDescription}
		</p>

		<div class="project-tags" />
		<div class="project-actions">
			{#each project.actions as action}
				<CardAction {action} />
			{/each}
		</div>
	</div>

	<img
		class="featured-project-image"
		src={project.previewImage}
		alt=""
		class:rightPosition={positionImageToRight}
		class:leftPosition={positionImageToLeft}
	/>
</div>
