<script setup lang="ts">
import type { singleProject } from "~/component-types-sb";
type Props = { blok: singleProject };
const props = defineProps<Props>();
const icons = props.blok.topIcons[0];
const projectDescription = computed(() =>
  renderRichText(props.blok.projectDescription)
);
const imageOrder = ref([...props.blok.pictures[0].images]);
const carouselGridClass = computed(()=>{
    const colCount = Math.min(6,imageOrder.value.length)
    return `grid grid-cols-${colCount} my-16`
})
console.log(props);
</script>
<template>
  <div v-editable="props.blok">
    <h1 class="text-2xl text-center">{{ props.blok.heading }}</h1>
    <SingleProjectIcons :date="icons.date" :location="icons.location"/>
    <div class="my-16 p-8 flex flex-col text-center">
      <div
        class="flex flex-col justify-center items-baseline gap-8"
        v-html="projectDescription"
      ></div>
      <div>
        <div ref="carousel" :class="carouselGridClass">
            <div 
                v-for="(image, index) in imageOrder" 
                :key="image.filename"
                class="w-[400px] transition-all duration-700 ease-in-out cursor-pointer"
                
            >
                <Carousel :image="image"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
