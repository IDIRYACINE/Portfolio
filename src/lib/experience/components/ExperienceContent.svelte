<script lang="ts">
	import { experienceState } from '../states/experienceState';

    export let content:Skill[];
    
    let selectedTab :number;

    experienceState.subscribe(value => selectedTab = value.selectedTab)

</script>

<div class="experience-content">
<h1>{content[selectedTab].name}</h1>

</div>