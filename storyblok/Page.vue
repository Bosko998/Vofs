<script setup lang="ts">
import type {PageStoryblok} from '~/component-types-sb'
type Props = {blok:PageStoryblok}
const props = defineProps<Props>()
</script>

<template>
<div v-editable="props.blok">
<StoryblokComponent v-for="bodyBlok in props.blok.blocks" :key="bodyBlok._uid" :blok="bodyBlok"/>
</div>
</template>