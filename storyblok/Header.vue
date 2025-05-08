<script setup lang="ts">
import type { Header } from "~/component-types-sb";
type Props ={ blok: Header };
const props = defineProps<Props>();
</script>
<template>
  <div v-editable="props.blok" class="flex justify-between items-center">
    <NuxtLink to="/">
      <NuxtImg
      to="/"
      alt="logo-img"
      width="150"
      height="25"
      :src="props.blok.logo.filename"
      />
    </NuxtLink>
    <!-- Navigation Menu -->
    <nav>
      <ul class="flex justify-center items-center gap-5 w-full">
        <li v-for="link in props.blok.menu_link" :key="link._uid">
          <StoryblokComponent :blok="link" />
        </li>
      </ul>
    </nav>
    <!--MultiLingual SRB/ENG-->
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="white"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class=" size-7"
>
  <path d="M14 20a2 2 0 0 1-4 0" />
  <path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8" />
</svg>


  </div>
</template>
