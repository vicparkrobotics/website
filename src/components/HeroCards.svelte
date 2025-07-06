<script lang="ts">
  const cards = [
    {
      title: "Our Mission",
      description:
        "VPCI Robotics' mission is to stimulate students and inspire a new generation of students into STEM through hands-on learning and an environment for creativity and confidence to grow.",
      image: "/index/our-mission.webp",
      alt: "Students working together on robotics projects, representing our mission to inspire STEM learning",
    },
    {
      title: "Our Goals",
      description:
        "The primary goal of VPCI Robotics is the extension of STEM into the community, and helping students understand the importance of STEM. Beyond that, we hope to propagate the values of FIRST & VPCI Robotics into the community, provide a comfortable environment for students to learn about STEM, and create strong bonds, both within our team members, and within the community.",
      image: "/index/goals.webp",
      alt: "Team members collaborating and planning, representing our goals for community engagement",
    },
    {
      title: "Our History",
      description:
        'Starting in 2014, Team 4914 "Panthers" was established at Victoria Park Collegiate Institute with students from the school and several teacher mentors. Since then, we have won 11 FRC awards and grown in size and diversity. Today, we operate as two First Tech Challenge Teams 24484 and 24485, continuing our legacy of engaging students in STEM, providing a fun and competitive environment for them to put their skills to the test.',
      image: "/index/history.webp",
      alt: "Historical photos and achievements of VPCI Robotics team over the years",
    },
  ];
</script>

<div class="bg-base-100 min-h-screen">
  <div class="hero bg-base-200 h-fit">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold font-pixel duration-100">
          <span id="welcome"></span>
          <span class="sr-only">Welcome to VPCI Robotics</span>
        </h1>
        <p class="pt-6">
          Welcome to VPCI Robotics, the Victoria Park Panthers. We are a student
          run FIRST Tech Competition (FTC) program at Victoria Park C.I.
          operating as Teams 24484 and 24485, run by 2 mentors and over 20
          students.
        </p>
      </div>
    </div>
  </div>
  <!-- "OUR MISSION", "OUR GOALS" and "OUR HISTORY" Cards -->
  <div
    class="flex flex-col md:flex-row justify-center gap-6 items-center md:items-stretch p-10 mb-10"
  >
    {#each cards as card}
      <article
        class="max-w-sm w-full p-4 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group hover:scale-[1.05] transition-transform duration-200"
      >
        <div class="rounded-xl z-40">
          <img
            src={card.image}
            alt={card.alt}
            width="700"
            height="350"
            loading="eager"
          />
        </div>
        <h3
          class="text-3xl font-pixel font-semibold text-gray-800 dark:text-white py-2"
        >
          {card.title}
        </h3>
        <p
          class="text-md font-normal text-neutral-600 dark:text-neutral-400 max-w-sm"
        >
          {card.description}
        </p>
      </article>
    {/each}
  </div>
</div>

<style>
  @keyframes welcome {
    /*This is an animation for the welcome*/
    12.5%,
    37.5%,
    62.5%,
    87.5% {
      opacity: 0;
    }
    6.25%,
    43.75%,
    68.75%,
    93.75% {
      opacity: 1;
    }
    0% {
      opacity: 1;
      content: "Welcome";
    }
    25% {
      opacity: 1;
      content: "Bienvienda";
    }
    50% {
      opacity: 1;
      content: "Bienvenue";
    }
    75% {
      opacity: 1;
      content: "欢迎";
    }
  }

  #welcome::before {
    animation: welcome 28s linear infinite;
    content: "Welcome";
  }
</style>
