<script>
    import { onDestroy } from "svelte";
    import { TextField, Slider, Button } from "smelte";
    import { userId } from "../../store.js";

    let rate = 0;
    let formBody = 0;
    let uid;
    const unsubscribe = userId.subscribe((id) => {
        uid = id;
        console.log(uid)
    });

    // コンポーネントを破棄したとき、サブスクライブを削除する
    // https://svelte.jp/docs#run-time-svelte-ondestroy
    onDestroy(() => {
        unsubscribe();
    })

    function sendForm() {
        console.log("submit!!!" + "uid!!!" + uid + "rate!!!" + rate + "formBody!!!" + formBody)
    };
</script>

<h3>Create</h3>
<div>{rate}</div>
<!-- bind:valueで、valueの値を動的に取得、反映 -->
<form on:submit|preventDefault={sendForm}>
    <Slider min="0" max="100" bind:value={rate} />
    <TextField label="Test label" textarea hint="Put your message" min="1" max="100" bind:value={formBody}/>
    <Button small type="submit">Send</Button>
</form>
