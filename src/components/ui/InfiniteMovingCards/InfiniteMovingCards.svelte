<script lang="ts">
  import { cn } from "../../../utils/cn";
  import { onMount } from "svelte";

  export let items: { quote: string; name: string; title: string }[];
  export let direction: "left" | "right" = "left";
  export let speed: "fast" | "normal" | "slow" = "fast";
  export let pauseOnHover: boolean = true;
  export let className: string | undefined = undefined;

  let containerRef: HTMLDivElement;
  let scrollerRef: HTMLUListElement;
  let start = false;

  onMount(() => {
    addAnimation();
  });

  function addAnimation() {
    if (containerRef && scrollerRef) {
      const scrollerContent = Array.from(scrollerRef.children);

      // Duplicate items for infinite scrolling effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef) {
          scrollerRef.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      start = true;
    }
  }

  const getDirection = () => {
    if (containerRef) {
      containerRef.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  };

  const getSpeed = () => {
    if (containerRef) {
      const durationMap = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.style.setProperty(
        "--animation-duration",
        durationMap[speed],
      );
    }
  };
</script>

<div
  bind:this={containerRef}
  class={cn(
    "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
    className,
  )}
>
  <ul
    bind:this={scrollerRef}
    class={cn(
      "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
      start && "animate-scroll",
      pauseOnHover && "hover:[animation-play-state:paused]",
    )}
  >
    {#each items as item, idx (item.name)}
      <li
        class="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]"
        style="background: linear-gradient(180deg, var(--slate-800), var(--slate-900));"
      >
        <blockquote>
          <div
            aria-hidden="true"
            class="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)]"
          ></div>
          <span
            class="relative z-20 text-sm font-normal leading-[1.6] text-gray-100"
          >
            {item.quote}
          </span>
          <div class="relative z-20 mt-6 flex flex-row items-center">
            <span class="flex flex-col gap-1">
              <span class="text-sm font-normal leading-[1.6] text-gray-400">
                {item.name}
              </span>
              <span class="text-sm font-normal leading-[1.6] text-gray-400">
                {item.title}
              </span>
            </span>
          </div>
        </blockquote>
      </li>
    {/each}
  </ul>
</div>
