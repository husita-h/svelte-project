<script>
	export const url = "";
	import { Router, Route } from "svelte-routing";
	import "smelte/src/tailwind.css" ;
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Home from "./components/Home.svelte";
	import About from "./components/About.svelte";
	import Create from "./components/Create.svelte";
	import Diary from "./components/Diary.svelte";
	import Test from "./components/Test.svelte";
</script>

<main class="bg-background-500">
	<Header/>
	<Router url="{url}">
		<div>
			<Route path="diary/:id" component="{Diary}"/>
			<Route path="create" component="{Create}"/>
			<Route path="about" component="{About}"/>
			<Route path="/"><Home/></Route>
		</div>
	</Router>
	<Test/>
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