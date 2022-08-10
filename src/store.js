import { writable } from "svelte/store";

let x = localStorage.getItem("user");

let user = {
    username: "",
    id: "",
    isLogin: false,
}

if (x) { user = JSON.parse(x) }

export const store = writable(user);

