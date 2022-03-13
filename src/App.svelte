<script>
	export const url = "";
	import { Router, Link, Route } from "svelte-routing";
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Home from "./components/Home.svelte";
	import About from "./components/About.svelte";
	import Create from "./components/Create.svelte";
	import Diary from "./components/Diary.svelte";
</script>

<main>
	<Header/>
	<Router url="{url}">
		<nav>
			<Link to="/">Home</Link>
			<Link to="about">About</Link>
			<Link to="create">Create</Link>
		</nav>
		<div>
			<Route path="diary/:id" component="{Diary}"/>
			<Route path="create" component="{Create}"/>
			<Route path="about" component="{About}"/>
			<Route path="/"><Home/></Route>
		</div>
	</Router>
	<Footer/>
</main>

<style>

</style>