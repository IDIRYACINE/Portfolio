<script>
	import { onMount } from 'svelte';
	import { loadProfile } from '../utility/StaticDataLoader';

	/**
	 * @type {Profile}
	 */
	let profile = {
		name: '',
		email: '',
		phone: '',
		facebook: '',
		github: '',
		secondaryEmail: ''
	};

	onMount(async () => {
		profile = await loadProfile();
	});
</script>

<nav id="nav">

	<ul class="links" >
		<li><a href="#about">About</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#education">Education</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>

	<ul class="icons">
		<li>
			<a href="{profile.facebook}" class="icon alt fa-file"
				><span class="label">Resume</span></a
			>
		</li>
		<li>
			<a href="{profile.github}" class="icon brands alt fa-github"
				><span class="label">GitHub</span></a
			>
		</li>
		<li>
			<a href="{profile.facebook}" class="icon brands alt fa-facebook-f"
				><span class="label">Facebook</span></a
			>
		</li>
	</ul>
</nav>

<style global>
	ul {
		display: flex;
		align-items: flex-end;
		justify-content: space-evenly;
	}

	ul.links {
		letter-spacing: 0.075em;
		list-style: none;
		margin-bottom: 0;
		padding-left: 0;
		display: felx;
		flex-grow: 1;
		flex-shrink: 1;
		text-transform: uppercase;
	}

	ul.icons {
		margin-bottom: 0;
	}
</style>
