<script setup lang="ts">
import {useStoryBlok} from '~/composables/useStoryBlok'
const {fetchStory} = useStoryBlok();
const {data:story} = await useAsyncData(
    'header',
    async()=>fetchStory('header')
)
</script>
<template>
    <div class="container my-0 mx-auto">
       <StoryblokComponent v-if="story" :blok="story.content"/> 
    </div>
</template>