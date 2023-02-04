<script lang="ts">
	export let profile: Profile;
</script>

<portfolio-section id="about-me">
	<section-title>About Me</section-title>
	<section-content>
		{#each profile.biography as aboutMe}
			<p class="section-paragraph">{aboutMe}</p>
		{/each}
	</section-content>
</portfolio-section>
