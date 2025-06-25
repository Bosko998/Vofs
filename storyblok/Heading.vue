<script setup lang="ts">
import type {Heading} from '~/component-types-sb.js'
type Props = {blok:Heading,classHeader?:string};
const props = defineProps<Props>();
</script>
<template>
<div v-editable="props.blok">
<h1 class="text-2xl text-center mt-8" :class="props?.blok?.classHeader">{{ props.blok.heading }}</h1>
</div>

</template>