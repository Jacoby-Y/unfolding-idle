<script>
	let cash = 0;

	const cl_cash = ()=>{
		cash += 1;
	}
</script>

<main>
	<h3 id="cash-txt">Cash: {cash}</h3>
	<button id="cl-cash" on:click={cl_cash}>Get 1 Cash</button>
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100%;
		background-color: #333;
	}
	#cl-cash {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		padding: 1rem 1.2rem;
		font-size: 1.2rem;
		font-weight: bold;
		border: none;
		border-radius: 0;
		background-color: #888;
	}
	#cl-cash:hover { opacity: 0.8; }
	#cl-cash:active { opacity: 0.6; }
	#cash-txt {
		padding: 1rem 1.2rem;
		font-size: 1.5rem;
	}
</style>