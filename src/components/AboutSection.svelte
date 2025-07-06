<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { TracingBeam } from "./ui/TracingBeam/index";

  const content = [
    {
      title: "Overview",
      description:
        "<p>The Victoria Park Collegiate Institute Robotics Team (Teams 24484 and 24485) is a FIRST Tech Challenge (FTC) comprised of an extremely dedicated group of 36 members, two teachers, community supporters and volunteer mentors. Teams 24484 and 24485 were founded in October 2023 by the teachers and staff of Victoria Park Collegiate Institute.</p>",
      image: "/group-photo.jpg",
      imageAlt: "Group photo of VPCI Robotics team members and mentors",
    },
    {
      title: "Our Vision",
      description:
        "<p>...is to become a model organization that promotes FIRST's vision of cultural transformation in Canada, through partnerships with our community, students, parents, teachers and our sponsors.</p>",
      image: "/hero-new.webp",
      imageAlt:
        "Vision representation showing community partnerships and FIRST values",
    },
    {
      title: "Our Mission",
      description:
        "<p>...is to encourage the personal growth and development of all of our stakeholders to focus on science and technology education through participation in FIRST competitions.</p>",
      image: "/group-photo.jpg",
      imageAlt:
        "Team members demonstrating mission of personal growth and STEM education",
    },
  ];
</script>

<section class="relative mx-auto max-w-2xl py-20 mt-20 antialiased">
  {#each content as item, index (`content-${index}`)}
    <article class="mb-10 w-full p-4">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        {item.title}
      </h2>

      <div class="w-full prose prose-sm md:prose-lg text-sm dark:prose-invert">
        {#if item?.image}
          <img
            src={item.image}
            alt={item.imageAlt}
            height="1000"
            width="1000"
            class="mb-10 rounded-lg object-cover"
            loading="lazy"
          />
        {/if}
        {@html item.description}
      </div>
    </article>
  {/each}
</section>
