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
	<ul class="links">
		<li><a href="#about-intro">About</a></li>
		<li><a href="#skills">Skills</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#education">Education</a></li>
		<li><a href="#footer">Contact</a></li>
	</ul>
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
