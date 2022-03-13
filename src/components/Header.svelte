<script>
    import { Router, Link } from "svelte-routing";
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
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="create">Create</Link>
        </nav>
    </Router>
    <Hamburger bind:open --color="white"/>
</header>


