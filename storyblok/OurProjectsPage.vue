<script setup lang="ts">
import type {ourProjectsPage} from '~/component-types-sb'
type Props = {blok:ourProjectsPage};
const props = defineProps<Props>()
const route = useRoute();
console.log(route)
const slug = computed(()=>{
    return props.blok.item.description
})
</script>
<template>
    <div v-editable="blok.props">
        <h1 class="text-2xl text-center">{{ props.blok.heading }}</h1>
        <div class="my-16 p-8 flex flex-col items-center justify-center text-center">
            <div class="grid grid-cols-4 gap-8 p-8">

                <div v-for="(item,index) in props.blok.projectItems" class="cursor-pointer">
                    <NuxtLink :to="`${route.fullPath}/${item.description.split(' ').join('-').toLowerCase()}`">
                        <ProjectItems :key="index" :project="item.project" :description="item.description" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>