<script lang="ts">
  import pages from "./pageNames.ts";
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->

<div class="drawer z-10">
  <!-- hidden checkbox that stores state under the hood -->
  <input id="sidebar" type="checkbox" class="drawer-toggle" />

  <div class="drawer-content flex flex-col">
    <!-- The rest of the content of the page goes here -->
    <slot />
    <!-- child components are put here -->
  </div>

  <div class="drawer-side">
    <!-- The Sidebar -->
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"
    ></label>

    <ul
      tabindex="0"
      class="menu menu-sm z-1 p-2 pt-20 pl-7 bg-base-100 space-y-1 w-2/3 h-full"
    >
      {#each pages as page (page.name)}
        <!-- loop through pages in data-->
        <li class="text-lg font-medium">
          {#if page.submenus}
            <!-- pages with submenus -->
            <details>
              <summary class="text-xl font-medium">{page.name}</summary>
              <!-- page title -->

              <ul>
                <!-- submenus -->
                {#each page.submenus as submenu (submenu.name)}
                  <!-- loop through each submenu -->
                  <li>
                    <a class="text-lg font-medium" href={submenu.href}
                      >{submenu.name}</a
                    >
                  </li>
                {/each}
              </ul>
            </details>
          {:else}
            <!-- no submenus -->
            <a class="text-xl font-medium" href={page.href}>{page.name}</a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>
