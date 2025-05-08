<script setup lang="ts">
import type {AssetStoryblok} from '~/component-types-sb'
type Props = {image:AssetStoryblok, member:string}
const props = defineProps<Props>();
let [firstName,lastName,position] = props.member.split(' ');
</script>
<template>
    <NuxtImg 
    :alt="props.image.alt"
    :src="props.image.filename"
    width="400"
    class="m-4"
    />
    <div class="text-center">
        <p>{{ `${firstName} ${lastName}` }}</p>
        <p>{{ position }}</p>
    </div>
</template>