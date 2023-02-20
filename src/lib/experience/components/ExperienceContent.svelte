<script lang="ts">
	import { experienceState } from '../states/experienceState';

	export let content: Skill[];

	let selectedTab: number;

	experienceState.subscribe((value) => (selectedTab = value.selectedTab));
</script>

<div class="experience-content">
	<ul>
		{#each content as skill, index}
			<li class="experience-content-item skills-icon ">
				{#if skill.institute}
                <p class="firstParagraph">{skill.name} - {skill.year}</p>
                <p>{skill.institute}</p>
                {:else}
                <p class="firstParagraph">{skill.name}</p>
                {/if}
			</li>
		{/each}
	</ul>
</div>
