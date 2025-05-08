<script setup lang="ts">
import type {AssetStoryblok} from '~/component-types-sb'
type Props = {project:AssetStoryblok,description:string};
const props = defineProps<Props>();
</script>
<template>
    <NuxtImg :src="props.project.filename" :alt="props.project.alt" width="400"  class=" hover:animate-pulse m-4"/>
    <span>{{ props.description }}</span>
</template>