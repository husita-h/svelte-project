<script>
    import { Button } from "smelte";
    import { getTextAtFireStore } from "../../helpers/firebase-firestore.js"

    let isDisabeled = false;

    async function displayList () {
        let res = await getTextAtFireStore();
        console.log("each回す前のres", res);
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
            console.log("eachで回したあとのres", element)
            let _text = element[1]["text"];
            let _created_at = new Date(element[1]["created_at"]);
            html_list_tag.insertAdjacentHTML("afterend", `<li>${_text}<ul><li>作成日時: ${_created_at}</li></ul></li>`);
        });
        return;
    }

    function changeForFetchButtonState (){
        isDisabeled = true;
        return;
    }

    function deleteButton (){
        // 削除の処理を追加する?
        // ボタンの状態を戻すため、リロード
        document.location.reload();
    }
    
    function deleteButtonCompletely () {
        // 削除の処理を追加する
        // ボタンの状態を戻すため、リロード
        document.location.reload();

    }

</script>

<h3>About</h3>
<ul id="textList">メッセージ</ul>
<div>同期ボタン</div>
<Button on:click={displayList} disabled={isDisabeled}>Fetch</Button>
<div>削除ボタン</div>
<Button on:click={deleteButton}>Delete</Button>
<div>削除ボタン※DBからも削除</div>
<Button on:click={deleteButtonCompletely}>DeleteCompletely</Button>
