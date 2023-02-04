<script lang="ts">
	import { onMount } from 'svelte';
	import { loadProfile } from '../lib/utility/StaticDataLoader';
	import { loadProjects } from '$lib/utility/StaticDataLoader';

	import Contact from '$lib/contact/Contact.svelte';
	import Education from '$lib/education/Education.svelte';
	import ProjectsPreview from '$lib/projectsPreview/ProjectsPreview.svelte';
	import Skills from '$lib/skills/Skills.svelte';
	import AboutIntro from '$lib/about/AboutIntro.svelte';
	import About from '$lib/about/About.svelte';
	import Intro from '$lib/intro/Intro.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import Copyright from '$lib/copyright/Copyright.svelte';
	import NoteWorthyProjects from '$lib/noteWorthyProjects/NoteWorthyProjects.svelte';

	let profile: Profile;
	let projectsLibrary: ProjectLibrary;

	$: isLoaded = false;

	onMount(async () => {
		profile = await loadProfile();
		projectsLibrary = await loadProjects();
		isLoaded = true;
	});
</script>

{#if isLoaded}
	<Navbar {profile} />

	<div id="main">
		<AboutIntro {profile} />
		<About {profile} />
		<ProjectsPreview {projectsLibrary} />
		<NoteWorthyProjects {projectsLibrary} />
		<Copyright {profile} />
	</div>
{:else}
	<Intro />
{/if}
