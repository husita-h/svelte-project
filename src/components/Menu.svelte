<script>
    import { Router, Link } from "svelte-routing";
    import { signInWithGoogle } from "../helpers/firebase.js";
    export let open;
</script>

{#if open}
    <nav>
        <Router>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="create">Create</Link>
            <Link to="#" on:click={signInWithGoogle}>Login</Link>
        </Router>
    </nav>
    <!-- <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} /> -->
{/if}

<style>
    
</style>
