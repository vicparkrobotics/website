<script lang="ts">
  export let searchTerm: string;
  export let searchYear: string;

  export let onEnter: VoidFunction;

  export let minYear: number;
  export let maxYear: number;

  const years: number[] = Array.from(
    { length: maxYear - minYear + 1 },
    (x, i) => maxYear - i,
  );
</script>

<div class="join">
  <div>
    <div>
      <input
        on:input={onEnter}
        on:keypress={(e) => e.key == "Enter" && onEnter()}
        bind:value={searchTerm}
        class="input input-bordered join-item"
        placeholder="Search awards..."
        aria-label="Search for awards by name or description"
        type="search"
      />
    </div>
  </div>

  <select
    on:input={onEnter}
    bind:value={searchYear}
    class="select select-bordered join-item"
    aria-label="Filter awards by year"
  >
    <!-- Filter by Year -->
    <option selected>All Years</option>
    {#each years as year}
      <!-- Loop through possible years in range -->
      <option>{year}</option>
    {/each}
  </select>

  <button
    on:click={onEnter}
    class="btn join-item bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label="Execute search for awards"
    type="button">Search</button
  >
</div>
