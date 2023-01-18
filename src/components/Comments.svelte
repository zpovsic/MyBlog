<script>
	/** @type {import('$lib/types').GHMetadata} */
	export let ghMetadata;
	/** @type {import('$lib/types').GHComment[]} */
	export let data = [];
	import { onMount } from 'svelte';
	onMount(async () => {
		if (data.length) return; // data has been passed in from above, so dont bother loading
		data = await (await fetch(ghMetadata.commentsUrl)).json();
	});
	import Comment from './Comment.svelte';
</script>

<div class="prose mb-8 w-full max-w-full dark:prose-invert">
	{#each data as comment}
		<Comment {comment} />
	{/each}
</div>
<a
	href={`${ghMetadata?.issueUrl}#issuecomment-new`}
	rel="external noreferrer"
	target="_blank"
	class="flex justify-center border-y border-blue-700 p-4 no-underline hover:text-yellow-700 dark:hover:text-yellow-200 sm:inline sm:rounded-xl sm:border-x"
>
	Leave a new comment!
</a>