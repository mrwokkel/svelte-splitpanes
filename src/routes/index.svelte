<script lang="ts">
	import MinMax from '$comp/MinMax.svelte';
	import DefaultSize from '$comp/DefaultSize.svelte';
	import LockLayout from '$comp/LockLayout.svelte';
	import PushOtherPanes from '$comp/PushOtherPanes.svelte';
	import AddRemoveSplitter from '$comp/AddRemoveSplitter.svelte';
	import ChangeOrientation from '$comp/ChangeOrientation.svelte';
	import ProgResize from '$comp/ProgResize.svelte';
	import TogglePanes from '$comp/TogglePanes.svelte';
	import ListenToEvents from '$comp/ListenToEvents.svelte';
	import StyleSplitters from '$comp/StyleSplitters.svelte';
	import StyleSplittersModern from '$comp/StyleSplittersModern.svelte';
	import SimpleSnap from '$comp/SimpleSnap.svelte';
	import MiddleSnap from '$comp/MiddleSnap.svelte';
	import MinMaxSnap from '$comp/MinMaxSnap.svelte';

	import Button from '$comp/extras/Button.svelte';

	let dir: 'LTR' | 'RTL' = 'LTR';

	const getOppositeDir = (dir: 'LTR' | 'RTL') => (dir === 'LTR' ? 'RTL' : 'LTR');
</script>

<main class:rtl-containers={dir === 'RTL'}>
	<h1>Svelte-Splitpane demo</h1>

	<a href="https://github.com/orefalo/svelte-splitpanes">https://github.com/orefalo/svelte-splitpanes</a>

	<h2>Features</h2>

	<ul>
		<li>Size is less than 4 kb</li>
		<li>Support both dynamic horizontal and vertical splits</li>
		<li>Support defaults, min and max sizes</li>
		<li>Support multiple splits</li>
		<li>Support lifecyle events</li>
		<li>Support custom divider size or overlay</li>
		<li>Support splitter pane pushing</li>
		<li>Support RTL rendering with auto-detection</li>
		<li>Support first splitter on/off</li>
		<li>Support pane toggle</li>
		<li>Support edge snapping</li>
		<li>Support programmatic resizing</li>
		<li>Support programmatic splitter add/remove</li>
		<li>Support for legacy browser such as IE 11</li>
		<li>Support for touch devices</li>
		<li>Sveltekit & Typescript friendly</li>
	</ul>

	<section>
		To see how this library handles automatically left-to-right(LTR) and right-to-left(RTL) text direction, you may
		toggle the following button:
		<Button
			width={200}
			on:click={() => {
				dir = getOppositeDir(dir);
			}}>Change Text Direction to {getOppositeDir(dir)}</Button
		>
	</section>

	<MinMax />
	<hr />
	<DefaultSize />
	<hr />
	<LockLayout />
	<hr />
	<PushOtherPanes />
	<hr />
	<AddRemoveSplitter />
	<hr />
	<ChangeOrientation />
	<hr />
	<ProgResize />
	<hr />
	<TogglePanes />
	<hr />
	<ListenToEvents />
	<hr />
	<SimpleSnap />
	<hr />
	<MiddleSnap />
	<hr />
	<MinMaxSnap />
	<hr />
	<StyleSplitters />
	<hr />
	<StyleSplittersModern />
</main>

<style>
	.rtl-containers :global(.splitpanes) {
		direction: rtl;
	}
</style>
