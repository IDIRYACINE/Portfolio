<script lang="ts">
	export let profile: Profile;
</script>

<div id="contact">
	<p class="title">What's next</p>
	<h1>Get In Touch</h1>

	<p class="content">
		Although I’m not currently looking for any new opportunities, my inbox is always open. Whether
		you have a question or just want to say hi, I’ll try my best to get back to you!
	</p>

    <a href={`mailto:${profile.email}`} class="action">
        Contact Me
    </a>

</div>
