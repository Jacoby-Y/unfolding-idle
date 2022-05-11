<script>
	let cash = 0;
	let hamster = 1;

	const cl_cash = ()=>{
		cash += 1;
	}
	const cl_hamster = ()=>{
		if (cash < 50) return;
		cash -= 50;
		hamster += 1;
	}
	setInterval(() => {
		if (hamster <= 0) return;
		cash += hamster;
	}, 1000);
</script>

<main>
	<h3 id="cash-txt">Cash: {cash}</h3>
	<button id="cl-cash" on:click={cl_cash}>Get 1 Cash</button>
	
	{#if hamster > 0 || cash >= 50} <button id="cl-hamster" on:click={cl_hamster}>Get 1 Hamster ($50)</button> {/if}
	{#if hamster > 0} <div id="slow-hamster"> <h3>${hamster}/sec</h3> </div> {/if}
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100%;
		background-color: #333;
	}
	button {
		padding: 1rem 1.2rem;
		font-size: 1.2rem;
		font-weight: bold;
		border: none;
		border-radius: 0;
		background-color: #888;
	}
	button:hover { opacity: 0.8; }
	button:active { opacity: 0.6; }
	#cl-cash {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	#cl-hamster {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(90%, -50%);
	}
	#cash-txt {
		padding: 1rem 1.2rem;
		font-size: 1.5rem;
	}

	#slow-hamster {
		background: url("https://media4.giphy.com/media/JQFZzvTP7XmPBmcSdH/giphy.gif");
		width: 10rem;
		height: 7rem;
		background-size: contain;
		background-repeat: no-repeat;
		position: absolute;
		left: 1rem;
		bottom: 1rem;
	}
	#slow-hamster h3 {
		position: absolute;
		left: 0;
		bottom: 100%;
		padding: 0.5rem 0;
	}
</style>