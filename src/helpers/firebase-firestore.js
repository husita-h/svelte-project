// ドキュメントを追加する
// https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja&authuser=0
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.js";

// データの追加をする処理
// https://firebase.google.com/docs/firestore/quickstart?hl=ja&authuser=0#add_data
export async function postTextForFirestore(uid = "", text = "") {
  try {
    const docRef = await addDoc(collection(db, "diaries"), {
      uid: uid,
      text: text,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

