<script>
    import { onDestroy } from "svelte";
    import { TextField, Button } from "smelte";
    import { userId } from "../../store.js";
    import { postTextForFirestore, getTextAtFireStore, delteTextAtFireStore } from "../../helpers/firebase-firestore.js"

    let count = 0;
    let text = null;
    let isDisabeledSubmit = true;
    let isDisabeledFetch = false;
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

    // =====Create=====
    function sendForm() {
        const res = postTextForFirestore(uid, text);
        if (res) {
            alert("メッセージの保存に成功しました");
            text = null;
        }else{
            alert("メッセージの保存に失敗しました");
        }
    };

    function changeForSubmitButtonState(_size) {
        if (_size > 0){
            isDisabeledSubmit = false;
            return;
        }else {
            isDisabeledSubmit = true;
            return;
        }
    };

    function countLength() {
        let _input = document.getElementById("textBox");
        count = _input.value.length
        changeForSubmitButtonState(count);
    }

    // =====Fetch=====
    async function displayList () {
        let res = await getTextAtFireStore();
        if (res) {
            putInTextArr(res);
            changeForFetchButtonState();
            return;
        }else{
            alert("ドキュメントの取得に失敗しました。")
            return;
        }
    }
    
    function putInTextArr (arr) {
        let html_list_tag = null;
        html_list_tag = document.getElementById("textList");
        arr.forEach((element) => {
            let _text = element[1]["text"];
            let _created_at = new Date(element[1]["created_at"]);
            html_list_tag.insertAdjacentHTML("afterend", `<li>${_text}<ul><li>作成日時: ${_created_at}</li></ul></li>`);
        });
        return;
    }
    
    function changeForFetchButtonState (){
        isDisabeledFetch = true;
        return;
    }

    // =====Delete=====
    function deleteButton (){
        // 削除の処理を追加する?
        // ボタンの状態を戻すため、リロード
        document.location.reload();
    }
    
    async function deleteButtonCompletely () {
        // 削除の処理を追加する
        const result = await delteTextAtFireStore();
        if (result) {
            alert("ドキュメントの削除に成功しました。")
            // ボタンの状態を戻すため、リロード
            // document.location.reload();
            return;
        }else{
            alert("ドキュメントの削除に失敗しました。")
            return;
        }
    }

</script>

<h3>Create</h3>
<div>残りの入力文字数{100 - count}</div>
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
        disabled={isDisabeledSubmit}
        type="submit"
    >Send</Button>
</form>

<ul id="textList">メッセージ</ul>
<div>同期ボタン</div>
<Button on:click={displayList} disabled={isDisabeledFetch}>Fetch</Button>
<div>削除ボタン</div>
<Button on:click={deleteButton}>Delete</Button>
<div>削除ボタン※DBからも削除</div>
<Button on:click={deleteButtonCompletely}>DeleteCompletely</Button>
