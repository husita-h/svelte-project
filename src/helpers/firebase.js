// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// Cloud Firestore を初期化する
// https://firebase.google.com/docs/firestore/quickstart?hl=ja&authuser=0#initialize
import { getFirestore } from "firebase/firestore";
import { userId } from "../store.js";
import Cookies from 'js-cookie';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export const db = getFirestore();

// ログイン
// Menuコンポーネントから使いたいため、exportする
// https://firebase.google.com/docs/auth/web/google-signin?hl=ja
export const signInWithGoogle = (() => {
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setUidStore(result);
        setUidCookie(result);
        console.log("ログインに成功しました" + result);
    }).catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(
            "errorCode:" + error.code + 
            "errorMessage:" + error.message +
            "email:" + error.email +
            "credential:" + credential
            );
        console.log("ログインに失敗しました" + result);
        alert("ログインに失敗しました。もう一度操作してください。エラーコード:" + error.code);
    });
})

// ログアウト
// https://firebase.google.com/docs/auth/web/google-signin?hl=ja#next_steps
export const signOutForGoogle = (() => {
    signOut(auth)
    .then((result) => {
        deleteUidCookie();
        console.log("ログアウトに成功しました" + result);
    }).catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(
            "errorCode:" + error.code + 
            "errorMessage:" + error.message +
            "email:" + error.email +
            "credential:" + credential
        );
        alert("ログアウトに失敗しました。もう一度操作してください。エラーコード:" + error.code);
    });
})

// ログインが成功したら、返却された`uid`をstoreにセットする関数
function setUidStore(r) {
    userId.set(r.user.uid)
};

// ログインが成功したら、返却された`uid`をstoreにセットする関数
// https://github.com/js-cookie/js-cookie
function setUidCookie(r) {
    Cookies.set('uid', r.user.uid, { expires: 1 });
};

// ログアウトに成功したら、storeとcookieにある`uid`を削除する
function deleteUidCookie() {
    Cookies.remove('uid');
    // 画面を更新する
    // `userId.set(null);`とせずとも、Storeからは値は消える
    document.location.reload();
};

