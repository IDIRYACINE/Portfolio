<script>
	import { loadProfile } from "$lib/utility/StaticDataLoader";
	import { onMount } from "svelte";

    /**
	 * @type {Profile}
	 */
    let profile ={
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

<div id="copyright">
    <ul>
        <li>&copy; {profile.name}</li>
        <li>Design: Html5up</li>
    </ul>
</div>