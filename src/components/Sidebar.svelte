<script lang="ts">
  import pages from "./pageNames.ts";
</script>

<div class="drawer z-50">
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

    <nav
      class="menu menu-sm z-1 p-2 pt-20 pl-7 bg-base-100 space-y-1 w-2/3 h-full"
      aria-label="Main navigation menu"
    >
      {#each pages as page (page.name)}
        <!-- loop through pages in data-->
        <li class="text-lg font-medium">
          {#if page.submenus}
            <!-- pages with submenus -->
            <details>
              <summary
                class="text-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {page.name}
              </summary>
              <!-- page title -->

              <ul role="menu">
                <!-- submenus -->
                {#each page.submenus as submenu (submenu.name)}
                  <!-- loop through each submenu -->
                  <li role="menuitem">
                    <a
                      class="text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                      href={submenu.href}
                      aria-label={`Navigate to ${submenu.name} page`}
                      >{submenu.name}</a
                    >
                  </li>
                {/each}
              </ul>
            </details>
          {:else}
            <!-- no submenus -->
            <a
              class="text-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              href={page.href}
              aria-label={`Navigate to ${page.name} page`}>{page.name}</a
            >
          {/if}
        </li>
      {/each}
    </nav>
  </div>
</div>
