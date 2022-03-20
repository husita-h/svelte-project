// ドキュメントを追加する
// https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja&authuser=0
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

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
      console.log("Document gotten with ID: ", `${doc.id} => ${doc.data()}`);
      result.push([doc.id, doc.data()]);
    });
    return result;
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}
