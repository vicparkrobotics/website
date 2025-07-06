<script lang="ts">
  import { scale } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  // props
  export let img: string;
  export let imgAlt: string;
  export let title: string;
  export let link: string;
  export let description: string;
</script>

<div
  transition:scale={{ duration: 1000, easing: expoInOut }}
  class="mx-4 card card-side bg-base-100 shadow-lg transition ease-in-out delay-75 hover:scale-[1.01] hover:drop-shadow-[0_10px_10px_rgba(250,250,250,0.25)]"
>
  <figure class="min-w-[60%] max-w-[60%]">
    <img src={img} alt={imgAlt} class="h-full" />
  </figure>
  <!-- Image -->

  <div class="card-body">
    <h2 class="card-title text-2xl">{title}</h2>
    <p>{description}</p>

    <!-- Button (link) -->
    <div class="card-actions justify-end">
      <a
        href={link}
        class="btn btn-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Learn more about ${title}`}>See More</a
      >
    </div>
  </div>
</div>
