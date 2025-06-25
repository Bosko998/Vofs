<script setup lang="ts">
import type { contactSection } from "~/component-types-sb.js";
type Props = { blok: contactSection };
const props = defineProps<Props>();
const save = ref(null);
const styles = reactive({
  input:'w-full text-white bg-primaryColor/10 border border-lightBlue/30 rounded px-3 py-2 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder:text-sm placeholder:opacity-75'
})
</script>

<template>
  <StoryblokComponent 
v-for="(item,index) in props.blok.items"
:key="index"
:blok="item"
/>
</template>
