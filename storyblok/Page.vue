<script setup lang="ts">
import type {PageStoryblok} from '~/component-types-sb'
type Props = {blok:PageStoryblok}
const props = defineProps<Props>()
</script>

<template>
<div v-editable="props.blok" class=" my-0 mx-16 HERE">
<StoryblokComponent v-for="bodyBlok in props.blok.blocks" :key="bodyBlok._uid" :blok="bodyBlok"/>
</div>
</template>