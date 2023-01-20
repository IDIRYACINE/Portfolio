<script lang="ts">
	import CardAction from "./CardAction.svelte";




    export let project: Project;
    
</script>


<div class="projectCard mb-0.5 flex flex-row items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-20 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="{project.previewImage}" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.previewDescription}</p>
        <row> 
            {#each project.actions as action}
                <CardAction {action} />
            {/each}
        </row>
    </div>
</div>
