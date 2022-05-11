<script>
	import { onMount } from "svelte";
	import Main from "./Main.svelte";

	let view = null;

	onMount(()=> window.onresize());

	window.onresize = ()=>{
		let scale = 1;
		const w = document.body.clientWidth;
		const h = document.body.clientHeight;
		if (w*0.6 >= h) scale = h/600;
		else scale = w/1000;
		
		view.style.transform = `translate(-50%, -50%) scale(${scale}, ${scale})`;
	}
</script>

<main bind:this={view}>
	<Main/>
</main>

<style>
	main {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		width: 1000px;
		height: 600px;
	}
</style>