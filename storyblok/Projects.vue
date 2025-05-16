<script setup lang="ts">
import { ref } from 'vue';
import type { Projects } from '~/component-types-sb';
const props = defineProps<Props>();
type Props = { blok: Projects }

let observer: IntersectionObserver | null = null;
let intervalId: any = ref(null); // Track the interval ID
const carousel = ref<HTMLElement | null>(null);

// Reactive array to track image positions
const imageOrder = ref([...props.blok.images]);
const defaultPosition = imageOrder.value;

// Function to rotate images when clicked
const rotateImages = (clickedIndex: number) => {
    const [left,center,right] = imageOrder.value;
    //Stop observer interval if picture is clicked
    if(intervalId.value !== null){
        clearInterval(intervalId.value)
    }

    if (clickedIndex === 1) return; // Don't rotate if center is clicked
    // Rotate array based on clicked index
    if (clickedIndex === 0) {
        imageOrder.value = [right,left,center];
    } else if (clickedIndex === 2) {
        imageOrder.value = [center,right,left];
    }
};

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
 
      if (entries[0].isIntersecting) {
        // Start interval if not already started
        if (intervalId.value === null) {
          intervalId.value = setInterval(() => {
            const [left,center,right] = imageOrder.value;
              imageOrder.value = [center, right, left];
          }, 2500);
        }
      }else{
        // Ending interval and reverting default carousel position
        if (intervalId.value !== null) {
        //console.log('I am ending interval rn')
          clearInterval(intervalId);
          intervalId.value = null;
          imageOrder.value =[...defaultPosition]
        }
      }

  }, { threshold: 0.1 });
  carousel.value && observer.observe(carousel.value);
});

onUnmounted(()=>{
  if(observer){
    observer.disconnect(); // Clean up to avoid memory leaks
  }
})
</script>

<template>
    <div v-editable="props.blok">
        <div ref="carousel" class="flex my-16 justify-center items-center overflow-visible mt-8 relative min-h-[400px] perspective-1000">
            <div 
                v-for="(image, index) in imageOrder" 
                :key="image.filename"
                class="w-[600px] h-[292px] absolute transition-transform duration-700 ease-in-out cursor-pointe"
                :class="{
                    'z-20 scale-125': index === 1, /* Center image - biggest */
                    'z-10 scale-100 -rotate-y-20 -translate-x-80': index === 0, /* Left image */
                    'z-10 scale-100 rotate-y-20 translate-x-80': index === 2 /* Right image */
                }"
                @click="rotateImages(index)"
            >
                <Carousel :image="image"/>
            </div>
        </div>
    </div>
</template>

