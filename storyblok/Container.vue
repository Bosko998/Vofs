<script setup lang="ts">
import type { Container } from "~/component-types-sb.js";
type Props = { blok: Container;containerClass?:string;containerAssetClass?:string;classHeader?:string };
const props = defineProps<Props>();
const checkLink = ref(null);

</script>

<template>
  <div v-editable="props.blok" class="flex justify-center items-center flex-wrap flex-col gap-4 mb-8" :class="containerClass">
    <template v-if="props.blok.link?.cached_url">
      <div class="">
        <NuxtLink  :to="props.blok.link?.cached_url" class="flex text-center gap-4 flex-wrap flex-col">
          <StoryblokComponent
          v-for="( item, index ) in props.blok.items"
          :key="item._uid || index"
          :blok="item"
          :assetClass="props?.containerAssetClass"
          :classHeader="props?.classHeader"
          
          />
        </NuxtLink>
      </div>
    </template>
    <template v-else>
        <StoryblokComponent
        v-for="( item, index ) in props.blok.items"
        :key="item._uid || index"
        :blok="item"
        :assetClass="props?.containerAssetClass"
        :classHeader="props?.classHeader"
        
        />
    </template>
  </div>
</template>
