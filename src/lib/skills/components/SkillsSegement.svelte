<script lang="ts">
	import SkillEntity from "./SkillEntity.svelte";

    export let skills : Skill[]
    export let title : string|null = null 

    
</script>

<div class="bg-white">
    {#if title}
    <h1 class="skills-title">{title}</h1>
    {/if}

    <div class ="skills-icons">
       
    {#each skills as skill}
        <SkillEntity {skill}/>
    {/each}


</div>

</div>
