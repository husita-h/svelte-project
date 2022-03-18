<script>
    import { onDestroy } from "svelte";
    import { Router, Link } from "svelte-routing";
    import { signInWithGoogle, signOutForGoogle } from "../helpers/firebase.js";
    import { userId } from "../store.js";

    let uid;
    const unsubscribe = userId.subscribe((id) => {
        uid = id;
    });
    // コンポーネントを破棄したとき、サブスクライブを削除する
    onDestroy(() => {
        unsubscribe();
    })

    export let open;
</script>

{#if open}
    <nav>
        <Router>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="create">Create</Link>
            {#if !uid}
                <Link to="#" on:click={signInWithGoogle}>Login</Link>
                {:else}
                <Link to="#" on:click={signOutForGoogle}>Logout</Link>
            {/if}
        </Router>
    </nav>
    <!-- <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} /> -->
{/if}

<style>
    
</style>
