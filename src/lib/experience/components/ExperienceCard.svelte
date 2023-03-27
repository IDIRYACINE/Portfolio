<script lang="ts">
	export let content: Skill[];
	export let title: String;
</script>

<div class="experience-card">
	<div class="header">
		<p class="title">{title}</p>
	</div>

    <div class="content">
        {#each content as skill}
            <p class="skill">{skill.name}</p>
        {/each}
    </div>
</div>
