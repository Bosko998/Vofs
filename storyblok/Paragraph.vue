<script setup lang="ts">
import type {Paragraph} from '~/component-types-sb.js'
type Props = {blok:Paragraph};
const props = defineProps<Props>(); 
const renderText = computed(()=>
    renderRichText(props.blok.text)
)
</script>

<template>
    <div v-editable="props.blok" class="text-base" v-html="renderText">
    </div>
</template>
