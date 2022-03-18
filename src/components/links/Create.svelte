<script>
    import { TextField, Slider, Button } from "smelte";
    let disabled = false;
    // 初期値
    let value = 0;

    function sendForm() {
        console.log("submit!!!")
    };
</script>

<h3>Create</h3>
<div>{value}</div>
<!-- bind:valueで、valueの値を動的に取得、反映 -->
<form on:submit|preventDefault={sendForm}>
    <Slider min="0" max="100" bind:value {disabled} />
    <TextField label="Test label" textarea hint="Put your message" min="1" max="100"/>
    <Button small type="submit">Send</Button>
</form>
<!-- <Button small type="submit">Send</Button> -->
