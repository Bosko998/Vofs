<script setup lang="ts">
import type { AboutSection} from "~/component-types-sb";
type Props = {blok:AboutSection};
const props = defineProps<Props>();


</script>

<template>
<div v-editable="props.blok" class="flex my-16 justify-around">
    <div class="flex basis-1/3">

        <NuxtImg 
        alt="team-img"
        
        :src="props.blok.TeamPic.filename"
        />
    </div>

    <div class="flex basis-1/2 flex-wrap justify-center items-center">
        <HeaderComponent class="text-4xl capitalize text-center">{{ props.blok.heading }}</HeaderComponent>
        <div>
            <p class=" text-base">{{ props.blok.aboutText }}</p>
        </div>
        <NuxtLink to="/o-nama" class="bg-primaryColor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase cursor-pointer">procitaj vise...</NuxtLink>
    </div>


</div>
</template>