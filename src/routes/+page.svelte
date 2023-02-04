<script lang="ts">
	import { onMount } from 'svelte';
	import { loadProfile } from '../lib/utility/StaticDataLoader';

	import Contact from '$lib/contact/Contact.svelte';
	import Education from '$lib/education/Education.svelte';
	import ProjectsPreview from '$lib/projectsPreview/ProjectsPreview.svelte';
	import Skills from '$lib/skills/Skills.svelte';
	import AboutIntro from '$lib/about/AboutIntro.svelte';
	import About from '$lib/about/About.svelte';
	import Intro from '$lib/intro/Intro.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import Copyright from '$lib/copyright/Copyright.svelte';

	let profile: Profile;

	$: isLoaded = false;

	onMount(async () => {
		profile = await loadProfile();

		isLoaded = true;
	});
</script>

{#if isLoaded}
	<Navbar {profile} />

	<div id="main">
		<AboutIntro {profile} />
		<About {profile} />

		<Contact {profile} />
		<Copyright {profile} />
	</div>
{:else}
	<Intro />
{/if}
