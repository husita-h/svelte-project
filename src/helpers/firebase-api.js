// ドキュメントを追加する
// https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja&authuser=0
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
