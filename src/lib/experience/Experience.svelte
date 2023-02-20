<script lang="ts">
	import ExperienceContent from './components/ExperienceContent.svelte';
	import ExperienceTab from './components/ExperienceTab.svelte';
	import { experienceState } from './states/experienceState';

	export let skillsLibrary: SkillLibrary;

    let contents = [skillsLibrary.languages, skillsLibrary.frameworks, skillsLibrary.databases,skillsLibrary.education]

    let selectedTab : number;

    experienceState.subscribe(value => {
        selectedTab = value.selectedTab;
    })

	

</script>

<div id="experience" class="portfolio-section">
	<p class="section-title">Experience</p>

	<div class="section-content">
		<ExperienceTab titles={skillsLibrary.skillsTitles} />
		<ExperienceContent content={contents[selectedTab]} />
	</div>
</div>
