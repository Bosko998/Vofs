<script setup lang="ts">
import type {TeaserStoryblok} from '~/component-types-sb'
type Props = {blok:TeaserStoryblok}
const props = defineProps<Props>();
</script>
<template>
    <div v-editable="props.blok">
    {{ props.blok.headline }}
    </div>
</template>