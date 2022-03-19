// ドキュメントを追加する
// https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja&authuser=0
// import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// データの追加をする処理
// https://firebase.google.com/docs/firestore/quickstart?hl=ja&authuser=0#add_data
// export const postDiary = async((uid = "", body = "") => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// })

