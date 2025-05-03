<script lang="ts">
  import { BentoGrid, BentoGridItem } from "./ui/BentoGrid/index";
  import {
    ClipboardCopy,
    File,
    FileSignature,
    Table,
    Waves,
    Box,
    Boxes,
  } from "lucide-svelte";

  let isSkeleton = true;

  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      icon: ClipboardCopy,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      icon: File,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      icon: FileSignature,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      icon: Table,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      icon: Waves,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      icon: Box,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      icon: Boxes,
    },
  ];
</script>

<BentoGrid className="max-w-7xl mx-auto">
  {#each items as item, i (i)}
    <BentoGridItem
      title={item.title}
      description={item.description}
      className={i === 3 || i === 6 ? "md:col-span-2" : ""}
    >
      <div
        slot="header"
        class="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-linear-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"
      ></div>
      <svelte:component
        this={item.icon}
        slot="icon"
        class="h-4 w-4 text-neutral-500"
      />
    </BentoGridItem>
  {/each}
</BentoGrid>
