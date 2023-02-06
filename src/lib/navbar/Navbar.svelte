<script lang="ts">
	import { smallSizeScreenWidth } from '$lib/utility/Constans';
	import NavbarContent from './components/NavbarContent.svelte';
	import NavbarMenu from './components/NavbarMenu.svelte';


	export let profile:Profile ;
	let innerWidth : any;

	$: smallScreen = innerWidth < smallSizeScreenWidth;


</script>

<svelte:window bind:innerWidth />

<nav id="nav-holder">
	<div id="nav">
	{#if !smallScreen}
	<NavbarContent/>
	{:else }
	<NavbarMenu/>
	{/if}
	</div>
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

</div>

<div id="right-socials">
	<a href={`mailto:${profile.email}`} class="link">{profile.email}</a>
</div>
