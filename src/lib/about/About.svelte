<script lang="ts">
	export let profile: Profile;
</script>

<div class="portfolio-section" id="about-me">
	<p class="section-title">About Me</p>
	<div class="section-content">
		{#each profile.biography as aboutMe}
			<p class="section-paragraph">{aboutMe}</p>
		{/each}

		<div id="about-education">
			<h1>Education</h1>
			<ul>
				<li>Bachelor degree in computer science - 2022</li>
				<li>Masters degree in computer science - 2024</li>
			</ul>
		</div>
	</div>
</div>
