<script setup lang="ts">
import { useStoryBlok } from "~/composables/useStoryBlok";
const { fetchStory } = useStoryBlok();
const {slug} = useRoute().params;
const STORY_SLUG = slug && slug.length > 0 ? (slug as string[]).join('/') : 'home';
const { data: story } = await useAsyncData(
  STORY_SLUG,
  async () => await fetchStory(STORY_SLUG)
);
onMounted(()=>{
  if(story.value && story.value.id){
    useStoryblokBridge(
      story.value.id,
      evStory => story.value = evStory,
    )
  }
})
console.log(story)
</script>

<template>
 <StoryblokComponent v-if="story" :blok="story.content"/>
</template>
