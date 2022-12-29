<script>
	import { Router, Link, Route } from "svelte-routing";
	import BlogPost from "./routes/BlogPost.svelte";
	import Blog from "./routes/blog.svelte";
	import About from "./routes/About.svelte";
	import Home from "./routes/Home.svelte";
	export let url = "";
</script>

<div>
	<Router {url}>
		<nav class="d-flex justify-content-center gap-5 pt-5">
			<Link to="/" class="btn btn-primary  text-light rounded">Home</Link>
			<Link to="about" class="btn btn-primary  text-light rounded"
				>Registration</Link
			>
			<Link to="blog" class="btn btn-primary  text-light rounded"
				>Login</Link
			>
		</nav>
		<div>
			<Route path="blog/:id" component={BlogPost} />
			<Route path="blog" component={Blog} />
			<Route path="about" component={About} />
			<Route path="/"><Home /></Route>
		</div>
	</Router>
</div>
