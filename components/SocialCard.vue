<script setup lang="ts">
type Props = {link:string,source:string};
const props = defineProps<Props>();
console.log(props)
</script>

<template>
<div class="flex items-center gap-4 min-w-48">

        <NuxtImg class="opacity-65" width="32" :src="props.link"/>
        <p>{{ props.source }}</p>
</div>

</template>