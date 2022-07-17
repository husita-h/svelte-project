// ドキュメントを追加する
// https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja&authuser=0
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "./firebase.js";
// import { docId } from "../store.js";

// データの追加をする処理
// https://firebase.google.com/docs/firestore/quickstart?hl=ja&authuser=0#add_data
export async function postTextForFirestore(uid = "", text = "") {
  try {
    const docRef = await addDoc(collection(db, "memos"), {
      uid: uid,
      text: text,
      created_at: new Date().getTime(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// データを取得する
// https://firebase.google.com/docs/firestore/quickstart?hl=ja&authuser=0#read_data
export async function getTextAtFireStore() {
  try {
    let result = [];
    const querySnapshot = await getDocs(collection(db, "memos"));
    querySnapshot.forEach((doc) => {
      console.log("Successed for Getting Document: ", `${doc.id} => ${doc.data()}`);
      result.push([doc.id, doc.data()]);
    });
    docId.set(result);
    return result;
  } catch (e) {
    console.error("Failed for Getting Document: ", e);
  }
}

// データを削除する
// https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=ja&authuser=0

export async function delteTextAtFireStore(){
  // const docIdinStore = docId.get;
  console.log("docIdinStore", docIdinStore);
  // try {
  //   const _docIdinStore = docId.get();
  //   console.log("_docIdinStore", _docIdinStore);
  //   const res = await deleteDoc(doc(db, "memos", "DC"));
  //   console.log("Successed for Deleting Document: ", res);
  //   return res;
  // }catch(e){
  //   console.error("Failed for Deleting Document: ", e);
  // }
}
