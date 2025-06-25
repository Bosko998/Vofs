<script setup lang="ts">
import type { Section } from "~/component-types-sb.js";
type Props = { blok: Section };
const props = defineProps<Props>();
</script>

<template>
  <div v-editable="props.blok" class="my-16 p-8">
    <StoryblokComponent
      v-for="(item, index) in props.blok.items"
      :key="item._uid || index"
      :blok="item"
    />
  </div>
</template>
