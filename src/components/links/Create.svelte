<script>
    import { onDestroy } from "svelte";
    import { TextField, Button } from "smelte";
    import { userId } from "../../store.js";
    import { postTextForFirestore } from "../../helpers/firebase-firesotre.js"

    let count = 0;
    let text = null;
    let isDisabeled = true;
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
        console.log("submit!!!" + "uid!!!" + uid + "text!!!" + text)
        postTextForFirestore(uid, text)
    };

    function changeButtonState(_size) {
        if (_size > 0){
            isDisabeled = false;
            return;
        }else {
            isDisabeled = true;
            return;
        }
    };

    function countLength() {
        let _input = document.getElementById("textBox");
        count = _input.value.length
        console.log("count" + count);
        changeButtonState(count);
    }

</script>

<h3>Create</h3>
<h4>{count}</h4>
<!-- bind:valueで、valueの値を動的に取得、反映 -->
<form on:submit|preventDefault={sendForm}>
    <!-- <Slider min="0" max="100" bind:value={textLength} /> -->
    <TextField
        id="textBox"
        label="Test label"
        textarea
        hint="Put your message"
        min="1"
        max="100"
        bind:value={text}
        on:change={countLength}
    />
    <Button
        disabled={isDisabeled}
        type="submit"
        on:click={sendForm}
    >Send</Button>
</form>
