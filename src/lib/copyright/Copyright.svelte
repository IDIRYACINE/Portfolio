<script lang="ts">
	export let profile: Profile;
</script>

<div id="copyright" >
    <ul class="icons socials">
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
    <ul class="copyright-footer">
        <li>Designed & Built By {profile.name}</li>
		<li>Inspired by <a href="#t">Brittany Chiang</a></li>
    </ul>
</div>