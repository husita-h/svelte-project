<script>
    import { onDestroy } from "svelte";
    import { Router, Link } from "svelte-routing";
    import { signInWithGoogle, signOutForGoogle } from "../helpers/firebase.js";
    import { userId } from "../store.js";

    export let open;
    let uid;

    const unsubscribe = userId.subscribe((id) => {
        uid = id;
    });
    
    // コンポーネントを破棄したとき、サブスクライブを削除する
    // https://svelte.jp/docs#run-time-svelte-ondestroy
    onDestroy(() => {
        unsubscribe();
    })

    function falseOpen() {
        open = false;
    };

</script>

{#if open}
    <nav on:click={falseOpen}>
        <Router>
            {#if !uid}
            <Link to="#" on:click={signInWithGoogle}>Login</Link>
            {:else}
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="create">Create</Link>
            <Link to="#" on:click={signOutForGoogle}>Logout</Link>
            {/if}
        </Router>
    </nav>
    <!-- <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} /> -->
{/if}

<style>
    
</style>
