<script setup lang="ts">
import type { Grid } from '~/component-types-sb.js'

type Props = { blok: Grid }
const props = defineProps<Props>()

// Calculate dynamic columns
const columnCount = props.blok.items?.length || 1
const gridStyle = `grid-cols-${Math.min(columnCount, 6)}` // max 6 columns for sanity
</script>

<template>
  <div v-editable="props.blok" class="grid gap-4 my-16 p-8" :class="[gridStyle]">
    <StoryblokComponent
      v-for="(item, index) in props.blok.items"
      :key="item._uid || index"
      :blok="item"
    />
  </div>
</template>

<style scoped>
/* Optional: Tailwind grid class generator fallback (for larger than 6 columns) */
.grid {
  display: grid;
}
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
</style>
