<script setup lang="ts">
import type { AboutPage } from "~/component-types-sb";
type Props = { blok: AboutPage };
const props = defineProps<Props>();
</script>
<template>
  <div v-editable="props.blok">
    <StoryblokComponent
      v-for="( item, index ) in props.blok.items"
      :key="item._uid || index"
      :blok="item"
      containerAssetClass="w-[500px]"
      containerClass="my-16 p-8"
    />
   
</div>
</template>