<script lang="ts">
	import { loadProfile } from "$lib/utility/StaticDataLoader";
	import { onMount } from "svelte";

    let profile:Profile = {
		name: "",
		email: "",
		phone: "",
		facebook: "",
		github: "",
		secondaryEmail: ""
	}

    onMount(async () => {
        profile = await loadProfile()
		
    })
    
</script>


<footer id="footer">
    <section class="split contact">
        <section>
            <h3>Phone</h3>
            <p><a id="phone">{profile.phone}</a></p>
        </section>
        <section>
            <h3>Email</h3>
            <p><a id="emai">{profile.secondaryEmail}</a></p>
        </section>
        <section>
            <h3>Social</h3>
            <ul class="icons alt">
                <li><a href="{profile.facebook}" class="icon brands alt fa-facebook-f"><span
                            class="label">Facebook</span></a></li>
                <li><a href="{profile.github}" class="icon brands alt fa-github"><span
                            class="label">GitHub</span></a></li>
            </ul>
        </section>
    </section>
</footer>


<div id="copyright">
    <ul>
        <li>&copy; {profile.name}</li>
        <li>Design: Html5up</li>
    </ul>
</div>
