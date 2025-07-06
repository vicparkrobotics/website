<script lang="ts">
  import { expoInOut } from "svelte/easing";
  import { scale } from "svelte/transition";

  export let title: string; // Card Title
  export let videoURL: string; // Video Link
  export let content: string; // Card Content
</script>

<div
  transition:scale={{ duration: 1000, easing: expoInOut }}
  class="card card-side h-48 bg-base-100 shadow-lg transition ease-in-out delay-75 hover:scale-[1.01] hover:drop-shadow-[0_10px_10px_rgba(250,250,250,0.25)] border dark:border-zinc-700"
>
  <iframe
    class="m-none mt-none max-w-[45%] h-full border-r dark:border-zinc-700 rounded-l-xl"
    src={videoURL}
    title={`YouTube video about ${title}`}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
    aria-label={`Video demonstration of ${title}`}
  >
  </iframe>

  <div class="card-body overflow-auto">
    <h2 class="card-title text-2xl">{title}</h2>
    <p>{content}</p>
  </div>
</div>
