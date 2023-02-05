<script lang="ts">

    export let action : ProjectAction

</script>

<a href={action.link} class={`icon ${action.icon}`}>
<span class="label">
  {action.name}
</span>
</a>