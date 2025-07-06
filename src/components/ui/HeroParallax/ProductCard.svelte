<script lang="ts">
  import { Motion, MotionValue } from "svelte-motion";

  export let product: {
    title: string;
    thumbnail: string;
  };
  export let translate: MotionValue<number>;
</script>

<Motion
  let:motion
  style={{
    x: translate,
  }}
  whileHover={{
    y: -20,
  }}
>
  <div
    use:motion
    class="relative h-96 w-[30rem] shrink-0"
    role="img"
    aria-label={product.title}
  >
    <img
      src={product.thumbnail}
      height="600"
      width="600"
      class="absolute inset-0 h-full w-full object-cover object-top-left rounded-md"
      alt={`Thumbnail image for ${product.title}`}
      loading="lazy"
    />
    <div
      class="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0"
      aria-hidden="true"
    ></div>
    <h2 class="sr-only absolute bottom-4 left-4 text-white opacity-100">
      {product.title}
    </h2>
  </div>
</Motion>
