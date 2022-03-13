<script>
    import { Router, Link } from "svelte-routing";
    import Menu from "./Menu.svelte";
    // 参考: https://www.npmjs.com/package/svelte-hamburgers
    import Hamburger from 'svelte-hamburgers';
    let open;
</script>

<svelte:head>
	<!-- Import base css -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
	<!-- Import spin css (spin is default type) -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css" />
</svelte:head>

<header class="bg-primary-300">
    <Hamburger bind:open --color="white"/>
    <Menu bind:open/>
</header>

