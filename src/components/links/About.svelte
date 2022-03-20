<script>
    import { Button } from "smelte";
    import { getTextAtFireStore } from "../../helpers/firebase-firestore.js"

    async function displayList () {
        let res = await getTextAtFireStore();
        console.log("each回す前のres", res);
        if (res) {
            putInTextArr(res);
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

    // function deleteButton (){

    // }

    // function deleteButtonCompletely () {

    // }

</script>

<h3>About</h3>
<ul id="textList">メッセージ</ul>
<div>同期ボタン</div>
<Button on:click={displayList}>Fetch</Button>
<!-- <Button on:click={deleteButton}>Delete</Button>
<Button on:click={deleteButtonCompletely}>DeleteCompletely</Button> -->
