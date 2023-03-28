<script lang="ts">
	import FadeInWidget from '$lib/utilityWidgets/FadeInWidget.svelte';
	import ExperienceCard from './components/ExperienceCard.svelte';
	import { experienceState } from './states/experienceState';

	export let skillsLibrary: SkillLibrary;

	let contents = [
		skillsLibrary.languages,
		skillsLibrary.frameworks,
		skillsLibrary.databases,
		skillsLibrary.education
	];

	let selectedTab: number;

	experienceState.subscribe((value) => {
		selectedTab = value.selectedTab;
	});
</script>

<div id="experience" class="portfolio-section">
	<p class="section-title">Experience</p>

	<div class="experiences-flex-container">
		{#each contents as skill, index}
			{#if index < 3}
				<FadeInWidget>
					<ExperienceCard title={skillsLibrary.skillsTitles[index]} content={skill} />
				</FadeInWidget>
			{/if}
		{/each}
	</div>
</div>
