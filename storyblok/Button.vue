<script setup lang="ts">
import type { Button } from '~/component-types-sb.js'

type Props = { blok: Button };
const props = defineProps<Props>();

const isClicked = ref(false)

function handleClick(event: MouseEvent) {
  if (isClicked.value) {
    event.preventDefault()
    return
  }

  isClicked.value = true

  setTimeout(() => {
    isClicked.value = false
  }, 1000)
}
</script>


<template>
    <div v-editable="props.blok" class="text-base">
      <NuxtLink
        :to="`/${props.blok.link?.cached_url}`"
        @click="handleClick"
        :class="[
          'bg-primaryColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase',
          isClicked ? 'opacity-50 pointer-events-none' : 'cursor-pointer'
        ]"
      >
        {{ props.blok.buttonName }}
      </NuxtLink>
    </div>
  </template>
  