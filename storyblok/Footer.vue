<script setup lang="ts">
import type {Footer} from '~/component-types-sb.js'
type Props = {blok:Footer}
const props = defineProps<Props>()
</script>
<template>
    <div class="grid grid-cols-2 gap-y-4 text-center p-6 bg-white/[0.05] backdrop-blur-xs rounded-2xl border border-white/[0.15] group hover:bg-white/[0.08] transition-all">

        <div v-editable="props.blok" v-for="socials in props.blok.socials" class="flex flex-col items-center ">
            <SocialCard :key="socials.id" :link="socials.filename" :source="socials.source"/>
        </div>
    </div>
</template>
<style lang="css" scoped>
.grid-cols-2 > *:nth-child(odd) {
  @apply items-start text-left justify-self-start;
}

.grid-cols-2 > *:nth-child(even) {
  @apply items-end text-right justify-self-end ;
}
</style>