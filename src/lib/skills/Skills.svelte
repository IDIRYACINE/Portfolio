<script lang="ts">
    import { onMount } from 'svelte';
    import { loadSkills } from '../utility/StaticDataLoader';
	import SkillsSegement from './components/SkillsSegement.svelte';

    let skillLibrary : SkillLibrary;
    let loaded = false

    $ : {loaded}

    onMount(async () => {
        skillLibrary = await loadSkills();
        loaded = true;
    });

</script>
<div id="skills">
<p>Skills</p>

<div class= "slice grid gap-3 ">
   {#if loaded}
        <SkillsSegement title={"Languages"} skills={skillLibrary.languages} />
        <SkillsSegement title={"Frameworks"} skills={skillLibrary.frameworks} />
        <SkillsSegement title={"Databases"} skills={skillLibrary.databases} />
   {/if}
</div>
</div>