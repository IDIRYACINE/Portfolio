<script lang="ts">
	import { smallSizeScreenWidth } from '$lib/utility/Constans';
	import { onMount } from 'svelte';
	import { loadProfile } from '../utility/StaticDataLoader';
	import NavbarContent from './components/NavbarContent.svelte';
	import NavbarMenu from './components/NavbarMenu.svelte';


	let profile:Profile = {
		name: '',
		email: '',
		phone: '',
		facebook: '',
		github: '',
		secondaryEmail: ''
	};
	let innerWidth : any;

	$: smallScreen = innerWidth < smallSizeScreenWidth;

	onMount(async () => {
		profile = await loadProfile();
	});

</script>

<svelte:window bind:innerWidth />

<nav id="nav">
	{#if !smallScreen}
	<NavbarContent/>
	{:else }
	<NavbarMenu/>
	{/if}
</nav>

<div id="left-socials">
	<ul class="icons">
		<li>
			<a href={profile.facebook} class="icon alt fa-file"><span class="label">Resume</span></a>
		</li>
		<li>
			<a href={profile.github} class="icon brands alt fa-github"
				><span class="label">GitHub</span></a
			>
		</li>
		<li>
			<a href={profile.facebook} class="icon brands alt fa-facebook-f"
				><span class="label">Facebook</span></a
			>
		</li>
	</ul>

	<div class="socials-line" />
</div>

<div id="right-socials">
	<a href="#s" class="link">{profile.email}</a>
	<div class="socials-line" />
</div>
