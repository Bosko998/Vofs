<script setup lang="ts">
import type { ourProjectsPage } from "~/component-types-sb";
type Props = { blok: ourProjectsPage};
const props = defineProps<Props>();
const route = useRoute();
const slug = computed(() => {
    return props.blok.item.description;
});
</script>
<template>
  <div v-editable="blok.props">
            <StoryblokComponent
              v-for="(item, index) in props.blok.items"
              :key="item._uid || index"
              :blok="item"
              gridAssetClass="w-full hover:animate-pulse"
            />
      </div>
</template>
<!--Osmisliti nacin kako najbolje da se pushuju propsi za link(mozda da se napravi nova link komponenta koja ce imati link i items...)-->