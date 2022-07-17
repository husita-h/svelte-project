import { writable } from "svelte/store";
import Cookies from "js-cookie";

const cookie = Cookies.get("uid");

// 初期値をセットする
// cookieが真(ログイン済)ならcookieをセットし、cookieが偽(null, 未ログイン)ならnullをセットする
export const userId = writable(cookie ? cookie : null);

// firebaseのdoc操作用のdocIdを保存する
export const docId = writable();
