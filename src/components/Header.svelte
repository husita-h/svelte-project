<script>
    import { Router, Link } from "svelte-routing";
</script>

<header>
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="create">Create</Link>
        </nav>
    </Router>
</header>
