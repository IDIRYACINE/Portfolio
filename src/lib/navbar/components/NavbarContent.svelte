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
	<li><a href="#experience" on:click={e => handleClick(e)}>Experience</a></li>
	<li><a href="#featured-projects" on:click={e => handleClick(e)}>Work</a></li>
	<li><a href="#contact" on:click={e => handleClick(e)}>Contact</a></li>
	<li><a class="action" href="/resume.pdf">Resume</a></li>
</ul>