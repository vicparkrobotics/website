<script lang="ts">
  //  issue on larger screens where the size is too small and the image repeats
  const cards = [
    {
      title: "Spirited",
      image: "/index/spirited.webp",
      alt: "Team members showing spirit and enthusiasm during robotics activities",
      size: "bg-[length:450px_300px]",
      sizeHover: "hover:bg-[length:300px_190px]",
      position: "bg-[center_bottom_-8rem]",
      positionHover: "hover:bg-[center_bottom_-4rem]",
    },
    {
      title: "Team Oriented",
      image: "/index/team-oriented.webp",
      alt: "Team members collaborating and working together on robotics projects",
      size: "bg-[length:500px_350px]",
      sizeHover: "hover:bg-[length:350px_245px]",
      position: "bg-[center_bottom_-6rem]",
      positionHover: "hover:bg-[center_bottom_-6rem]",
    },
    {
      title: "Empathetic",
      image: "/index/empathetic.webp",
      alt: "Team members showing empathy and support for one another",
      size: "bg-[length:300px_200px]",
      sizeHover: "hover:bg-[length:275px_183px]",
      position: "bg-[center_bottom_-3rem]",
      positionHover: "hover:bg-[center_bottom_-4rem]",
    },
    {
      title: "Methodical",
      image: "/index/methodical.webp",
      alt: "Team members demonstrating methodical and systematic approach to problem solving",
      size: "bg-[length:450px_350px]",
      sizeHover: "hover:bg-[length:310px_210px]",
      position: "bg-[center_bottom_-4rem]",
      positionHover: "hover:bg-[center_bottom_-5rem]",
    },
  ];
</script>

<main>
  <section class="pb-8 bg-base-200">
    <div
      class="py-4 h-20 card place-items-center text-3xl font-semibold font-pixel"
    >
      <h2>Core Values</h2>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-4 w-full px-4 gap-4 justify-center items-stretch text-center"
      role="grid"
      aria-label="VPCI Robotics core values"
    >
      {#each cards as card}
        <article
          style="background-image: url({card.image});"
          class="bg-base-100 card md:dark:opacity-40 shadow-xl transition-all duration-700 ease-in-out hover:-translate-y-2 hover:scale-[1.05] hover:opacity-100 focus-within:opacity-100 focus-within:scale-[1.05] {card.size} {card.sizeHover} {card.position} {card.positionHover}"
          aria-label={`Core value: ${card.title}. ${card.alt}`}
        >
          <div class="card-body justify-center items-center">
            <h3 class="card-title text-white font-pixel">{card.title}</h3>
          </div>
        </article>
      {/each}
    </div>
  </section>
</main>
