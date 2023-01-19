<script>

	import { getContext, onMount } from 'svelte';
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

	/**
	 * @type {IntersectionObserver}
	 */
	let observer;

	onMount(async () => {
		profile = await loadProfile();
		const el = document.querySelector('.section');

        if(!el) return;

		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					el.classList.add('show');
					observer.unobserve(el);
				}
			});
		});
		observer.observe(el);
	});
</script>

<div id="intro" class="section" >
	<h1>{profile.name}</h1>
	<p id="portfolio_description">Fullstack Developer</p>
	<ul class="actions">
		<li><a href="#header" class="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
	</ul>
</div>

<style>
	.section{
		opacity: 1;
		transition: opacity 10s;
	}

</style>
