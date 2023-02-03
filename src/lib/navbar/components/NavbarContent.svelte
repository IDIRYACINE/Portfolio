<script lang="ts">
	export let toggleSideBarIfExists = () => {};

	function handleClick(e: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }){
		e.preventDefault();
		toggleSideBarIfExists();
		window.location.href = e.currentTarget.href
	}
</script>

<ul class="links">
	<li><a href="#about-intro" on:click={e => handleClick(e)}>About</a></li>
	<li><a href="#skills">Skills</a></li>
	<li><a href="#projects">Projects</a></li>
	<li><a href="#education">Education</a></li>
	<li><a href="#footer">Contact</a></li>
</ul>
