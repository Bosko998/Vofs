<script setup lang="ts">
import type { MenuLink } from "~/component-types-sb";
const route = useRoute();
type Props = {blok: MenuLink;}
const props = defineProps<Props>();

// Compute the correct href
const linkHref = computed(() => {
  if (props.blok.link.linktype === "story") {
    return props.blok.link.cached_url == 'home' ? '/' : `/${props.blok.link.cached_url}`
  }
});
const isActive = computed(()=>{
  return (route.path === '/' && props.blok.link.cached_url === 'home') || 
  route.path.slice(1) === props.blok.link.cached_url
})
</script>

<template>
  <div v-editable="props.blok" >
    <NuxtLink :class="{'border-b-2 border-lightBlue':isActive}" :to="linkHref">{{ props.blok.name }}</NuxtLink>
  </div>
</template>
