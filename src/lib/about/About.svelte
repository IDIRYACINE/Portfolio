<script lang="ts">
	

	export let profile: Profile;


</script>

<div class="portfolio-section" id="about-me" >
	<p class="section-title">About Me</p >
	<div class="section-content">
		{#each profile.biography as aboutMe}
			<p class="section-paragraph">{aboutMe}</p>
		{/each}
	</div>
</div>
