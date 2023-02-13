<script lang="ts">
	import ExperienceContent from './components/ExperienceContent.svelte';
	import ExperienceTab from './components/ExperienceTab.svelte';
	import { experienceState } from './states/experienceState';

	export let skillsLibrary: SkillLibrary;

    let selectedTab : number;

    experienceState.subscribe(value => {
        selectedTab = value.selectedTab;
    })

	function getSectionContent(): Skill[] {
        switch(selectedTab){
            case 1 : 
                return skillsLibrary.frameworks;
            case 2 : 
                return skillsLibrary.databases;    
            default : 
                return skillsLibrary.languages;
        }
	}

</script>

<div id="experience" class="portfolio-section">
	<p class="section-title">Experience</p>

	<div class="section-content">
		<ExperienceTab titles={skillsLibrary.skillsTitles} />
		<ExperienceContent content={getSectionContent()} />
	</div>
</div>
