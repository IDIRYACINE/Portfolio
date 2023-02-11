<script lang="ts">
	export let toggleSideBarIfExists = () => {};

	function handleClick(e: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }){
		e.preventDefault();
		window.location.href = e.currentTarget.href
		toggleSideBarIfExists();
	}
</script>

<ul class="links">
	<li><a href="#about-me" on:click={e => handleClick(e)}>About</a></li>
	<li><a href="#skills">Experience</a></li>
	<li><a href="#featured-projects">Work</a></li>
	<li><a href="#contact">Contact</a></li>
	<li><a class="action" href="/resume.pdf">Resume</a></li>
</ul>
