<script lang="ts">
	import type { PlayerData } from '$lib/index';
	// This component displays the list of players currently in the game.
	let props = $props<{
	players: PlayerData[];
	streaks: Record<string, number>;
}>();
	let clicked = $state(false);
	$effect(() => {
	console.log('STREAKS IN WIDGET:', props.streaks);
});
</script>

<div class="players-widget">
	<!-- modal: list players online, when clicked, it shows players names in a small dropdown -->

	<button onclick={() => (clicked = !clicked)}
		>{clicked ? '△ ' : '▽ '}{props.players.length} players online</button
	>
	{#if clicked}
		<ul>
			{#each props.players as player}
				<li>
	<strong>{player.name}</strong> — {player.score} points
	{#if props.streaks[player.socketId] > 0}
	🔥 {props.streaks[player.socketId]} streak
{/if}
</li>
			{/each}
		</ul>
	{:else}{/if}
</div>

<style>
	.players-widget button {
		background: transparent;
		border: none;
		color: var(--point-color);
		cursor: pointer;
	}

	.players-widget {
	color: #4a4036;
	opacity: 0.8;
	position: fixed;
	top: 1rem;
	right: 1rem;
	background: var(--theme-color);
	border: white 2px solid;
	padding: 1rem;
	border-radius: 10px;
	max-width: 200px;
	z-index: 9999;
}

	.players-widget ul {
		list-style-type: none;
		padding: 0;
	}

	.players-widget li {
		margin: 0.5rem 0;
	}
</style>
