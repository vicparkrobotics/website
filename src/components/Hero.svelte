<script lang="ts">
  export let backgroundImage: string;
  export let standardTitleText: string = "";
  export let gradientTitleText: string = "";
  export let descriptionText: string = "";
</script>

<!-- Hero -->
<div
  class="hero overflow-hidden min-h-screen bg-fixed"
  style="background-image: {backgroundImage}"
>
  <div class="hero-overlay bg-opacity-60"></div>

  <div class="relative z-10">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div class="max-w-2xl text-center mx-auto">
        <div class="flex justify-center">
          <a
            class="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
            href="/about-us"
            aria-label="Learn more about VPCI Robotics FTC Teams 24484 and 24485"
          >
            <img
              src="/logo-transparent.webp"
              alt="Victoria Park Collegiate Institute Robotics logo"
              class="w-6 invert dark:invert-0"
              loading="eager"
            />
            FTC Teams 24484 and 24485
            <span class="flex items-center gap-x-1">
              <span class="border-s ps-2 text-blue-500 border-neutral-700"
                >Explore</span
              >
              <svg
                class="shrink-0 size-4 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg
              >
            </span>
          </a>
        </div>

        <!-- Title -->
        <div class="mt-5 max-w-2xl">
          <h1
            class="my-5 md:text-7xl text-5xl text-white font-bold underline underline-offset-8 decoration-red-800"
          >
            {standardTitleText}
            <span class="text-gradient bg-clip-text text-transparent"
              >{#if gradientTitleText}{gradientTitleText}{/if}<span></span>
            </span>
          </h1>
        </div>
        <!-- End Title -->

        <div class="mt-5 max-w-3xl">
          <p class="text-lg text-neutral-400">
            {descriptionText}
          </p>
        </div>

        <!-- Buttons -->
        <div class="mt-8 gap-3 flex justify-center">
          <a
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary hover:bg-[#851414] focus:bg-[#851414] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            href="/about-us"
            aria-label="Learn more about Victoria Park Robotics"
          >
            About Us
            <svg
              class="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg
            >
          </a>
          <a
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none text-white hover:bg-neutral-900 bg-neutral-800"
            href="#contact"
            aria-label="Contact Victoria Park Robotics team"
          >
            Contact Us
          </a>
        </div>
        <!-- End Buttons -->
      </div>
    </div>
  </div>
</div>
<!-- End Hero -->
