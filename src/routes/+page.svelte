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
	import FadeInWidget from '$lib/utilityWidgets/FadeInWidget.svelte';

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
		<FadeInWidget><AboutIntro {profile} /></FadeInWidget>

		<FadeInWidget><About {profile} /></FadeInWidget>
		<FadeInWidget><ProjectsPreview {projectsLibrary} /></FadeInWidget>
		<FadeInWidget><NoteWorthyProjects {projectsLibrary} /></FadeInWidget>
		<Copyright {profile} />
	</div>
{:else}
	<Intro />
{/if}
