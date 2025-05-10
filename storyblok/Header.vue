<script setup lang="ts">
import type { Header } from "~/component-types-sb";

const props = defineProps<{ blok: Header }>();
</script>

<template>
  <div v-editable="props.blok" class="grid grid-cols-3 place-items-center">
    <!-- Logo -->
    <NuxtLink to="/">
      <NuxtImg
        :src="props.blok.logo.filename + '?w=300&q=90'"
        :srcset="`
          ${props.blok.logo.filename}?w=300&q=90 1x,
          ${props.blok.logo.filename}?w=600&q=90 2x
        `"
        alt="logo-img"
        width="150"
        height="25"
        format="webp"
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

    <!-- MultiLingual Icon -->
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
      class="size-7"
    >
      <path d="M14 20a2 2 0 0 1-4 0" />
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8" />
    </svg>
  </div>
</template>
