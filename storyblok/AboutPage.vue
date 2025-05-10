<script setup lang="ts">
import type { AboutPage } from "~/component-types-sb";
type Props = { blok: AboutPage };
const props = defineProps<Props>();
</script>
<template>
  <div v-editable="props.blok">
    <h1 class="text-2xl text-center">{{ props.blok.heading }}</h1>
    <div class="flex flex-col items-center my-16 p-8">

      <!-- Unified grid layout -->
      <div class="grid w-full gap-8 grid-cols-4 auto-rows-max p-8">
        <div
        v-for="(item, index) in props.blok.teamMembers"
        :key="index"
        class="flex flex-col items-center justify-center "
        :class="index === 0 && 'col-span-4'"
        >
        <TeamMembers :image="item.image" :member="item.member" />
      </div>
    </div>
  </div>
</div>
</template>


<!-- flex flex-col justify-center items-center w-full -->
