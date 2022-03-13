<script>
    import { Router, Link } from "svelte-routing";
    export let open;
</script>

{#if open}
    <nav>
        <Router>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="create">Create</Link>
            <Link to="login">Login</Link>
        </Router>
    </nav>
    <!-- <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} /> -->
{/if}

<style>
    
</style>
