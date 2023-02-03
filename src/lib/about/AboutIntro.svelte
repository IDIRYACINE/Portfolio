<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import { loadProfile } from '../utility/StaticDataLoader';

	let profile: Profile = {
		name: '',
		email: '',
		phone: '',
		facebook: '',
		github: '',
		secondaryEmail: ''
	};

	let observer: IntersectionObserver;
	let el: Element | null;

	onMount(async () => {
		profile = await loadProfile();
		el = document.querySelector('.section');
	});

	function OnInit(e: CustomEvent<LifecycleEventDetails>) {
		el = document.querySelector('.section');
		if (!el) return;
		el.classList.add('show');
	}

	function onEnter(e: CustomEvent<ObserverEventDetails>) {
		if (!el) return;
		el.classList.add('show');
	}

	function onLeave(e: CustomEvent<ObserverEventDetails>) {
		console.log('leave');
		if (!el) return;
		el.classList.remove('show');
	}

</script>

<div
	id="about-intro"
	use:inview
	on:enter={(e) => onEnter(e)}
	on:leave={(e) => onLeave(e)}
	on:init={(e) => OnInit(e)}
>
	<h1 id="intro-title">{profile.name}</h1>
	<p id="intro-description">Fullstack Developer</p>
	<ul class="actions">
		<li><a href="#header" class="action">Continue</a></li>
	</ul>
</div>

<style>
</style>
