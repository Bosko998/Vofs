<script setup lang="ts">
import {useStoryBlok} from '~/composables/useStoryBlok.js'
const {fetchStory} = useStoryBlok();
const {data:story} = await useAsyncData(
    'footer',
    async()=>fetchStory('footer')
)
</script>
<template>
    <div class="container my-16 mx-auto">
        <StoryblokComponent v-if="story" :blok="story.content"/>
    </div>
</template>