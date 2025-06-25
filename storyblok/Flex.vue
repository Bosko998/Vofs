<script setup lang="ts">
import type { Flex } from "~/component-types-sb.js";
type Props = { blok: Flex;flexClass?:string;classHeader?:string };
const props = defineProps<Props>();
</script>

<template>
  <div v-editable="props.blok" class="flex flex-col my-16 justify-center items-center gap-10" :class="flexClass">
    <StoryblokComponent
      v-for="( item, index ) in props.blok.items"
      :key="item._uid || index"
      :blok="item"
      :classHeader = props?.classHeader
    />
  </div>
</template>
