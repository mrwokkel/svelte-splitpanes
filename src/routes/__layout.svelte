<script>
	import theme from 'svelte-highlight/styles/night-owl';
</script>

<svelte:head>
	<title>Svelte-Splitpanes</title>
	<meta name="description" content="A Fantastic pane splitter for Svelte" />
	{@html theme}
</svelte:head>
<div class="page-container">
	<slot />
</div>

<style>
	:global(body) {
		font-family: Helvetica, Arial, sans-serif;
		color: rgba(116, 103, 103);
	}

	:global(h1 h2) {
		color: #000;
	}

	:global(p) {
		color: #999;
		font-size: medium;
		padding-top: 1em;
		padding-bottom: 1em;
		font-style: italic;
	}

	:global(.splitpanes__pane) {
		justify-content: center;
		align-items: center;
		color: rgba(106, 106, 106, 0.6);
		display: flex;
		position: relative;
		font-size: 3em;
	}

	:global(em.specs) {
		font-size: 0.2em;
		line-height: 1;
		position: absolute;
		color: #bbb;
		bottom: 0.5em;
		left: 0;
		right: 0;
		text-align: center;
		font-size: 0.5em;
	}

	/* additional styling to the code area */
	:global(code.hljs) {
		tab-size: 4;
	}

	.page-container {
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		flex-grow: 1;
		max-width: 1150px;
		margin-left: auto;
		margin-right: auto;
		font-size: 14px;
	}
</style>
