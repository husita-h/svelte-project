<script>
    import { createEventDispatcher } from 'svelte';
    import { Button } from "smelte";

    const dispatch = createEventDispatcher();
    const testButton = (()=>{
        dispatch({
            console.log("`src/components/Test.svelte`が押下されています")
        });
    })
</script>

<Button on:click={testButton}>テストボタン</Button>