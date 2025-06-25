<script setup lang="ts">
import type {AssetStoryblok} from '~/component-types-sb.js'
type Props = {blok:AssetStoryblok; assetClass?:string};
const props = defineProps<Props>();
</script>

<template>
<div v-editable="props.blok" :class="props.assetClass">
    <NuxtImg 
        :alt="props.blok.picture.alt"
        :src="props.blok.picture.filename"
        />

</div>
</template>