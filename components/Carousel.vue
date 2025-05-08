<script setup lang="ts">
import type { AssetStoryblok } from '~/component-types-sb';
type Props = {image:AssetStoryblok}
const props = defineProps<Props>();
</script>
<template>
        <LazyNuxtImg class="w-full h-full object-cover" :src="props.image.filename" alt="carousel-img" />

</template>