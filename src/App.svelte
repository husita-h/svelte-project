<script>
	export const url = "";
	import { Router, Route } from "svelte-routing";
	import "smelte/src/tailwind.css" ;
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Home from "./components/links/Home.svelte";
	import About from "./components/links/About.svelte";
	import Create from "./components/links/Create.svelte";
	import Login from "./components/links/Login.svelte";
	import Diary from "./components/Diary.svelte";
	import Test from "./components/Test.svelte";
	import "./helpers/firebase.js";

	const testButton = (() => {
		console.log("テストボタンが押されました");
	})
	console.log("`src/components/Test.svelte`が押下されています")

</script>

<main class="bg-background-500">
	<Header/>
	<Router url="{url}">
		<div>
			<Route path="diary/:id" component="{Diary}"/>
			<Route path="create" component="{Create}"/>
			<Route path="about" component="{About}"/>
			<Route path="login" component="{Login}"/>
			<Route path="/"><Home/></Route>
		</div>
	</Router>
	<Test on:click={testButton}/>
	<Footer/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>