<script setup lang="ts">
type Props = {link:string,source:string};
const props = defineProps<Props>();
</script>

<template>
<div class="flex items-center gap-4 min-w-48">

        <NuxtImg width="32" :src="props.link"/>
        <p>{{ props.source }}</p>
</div>

</template>