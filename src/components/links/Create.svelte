<script>
    import { onDestroy } from "svelte";
    import { TextField, Button } from "smelte";
    import { userId } from "../../store.js";
    import { postTextForFirestore } from "../../helpers/firebase-firestore.js"

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
        console.log("submit!!!" + "uid!!!" + uid + "text!!!" + text);
        const res = postTextForFirestore(uid, text);
        if (res) {
            alert("メッセージの保存に成功しました");
        }else{
            alert("メッセージの保存に失敗しました");
        }
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
    >Send</Button>
</form>
