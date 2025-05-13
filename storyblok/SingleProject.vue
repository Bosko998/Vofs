<script setup lang="ts">
import type { AssetStoryblok, singleProject } from "~/component-types-sb";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XCircleIcon,
} from "@heroicons/vue/16/solid";

type Props = { blok: singleProject };
const props = defineProps<Props>();

const selectedImage = ref<AssetStoryblok | null>(null);
const selectedIndex = ref<number | null>(null);

// Start at first full view (showing items 1–4)
const startIndex = ref(1);

const icons = props.blok.topIcons[0];
const projectDescription = computed(() =>
  renderRichText(props.blok.projectDescription)
);

const imageOrder = computed(() => [...props.blok.pictures[0].images]);

// Calculate translateX based on index * width per item (25%)
const translateStyle = computed(() => {
  const offset = startIndex.value * 25;
  return `translateX(-${offset}%)`;
});

const moveLeft = () => {
  if (startIndex.value > 0) {
    startIndex.value--;
  }
};

const moveRight = () => {
  const maxStart = imageOrder.value.length - 4; // Only scroll if 4 more images exist
  if (startIndex.value < maxStart) {
    startIndex.value++;
  }
};

const openImg = (image: AssetStoryblok, index: number) => {
  selectedImage.value = image;
  selectedIndex.value = index;
};

const closeImg = () => {
  selectedImage.value = null;
  selectedIndex.value = null;
};
</script>

<template>
  <div v-editable="props.blok">
    <h1 class="text-2xl text-center">{{ props.blok.heading }}</h1>
    <SingleProjectIcons :date="icons.date" :location="icons.location" />
    <div class="my-16 p-8 flex flex-col text-center">
      <div
        class="flex flex-col justify-center items-baseline gap-8"
        v-html="projectDescription"
      ></div>

      <div class="relative my-16">
        <!-- Left arrow -->
        <div
          class="left-icon absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 hover:scale-110 active:scale-95 transition-transform duration-200"
          @click="moveLeft"
        >
          <ChevronLeftIcon class="h-6 w-6 text-primaryColor" />
        </div>

        <!-- Right arrow -->
        <div
          class="right-icon absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 hover:scale-110 active:scale-95 transition-transform duration-200"
          @click="moveRight"
        >
          <ChevronRightIcon class="h-6 w-6 text-primaryColor" />
        </div>

        <!-- Viewport container -->
        <div class="overflow-hidden relative w-full max-w-[90%] mx-auto">
          <!-- Sliding container -->
          <div
            class="flex transition-transform duration-500 ease-in-out gap-4"
            :style="{ transform: translateStyle }"
          >
            <div
              v-for="(image, index) in imageOrder"
              :key="image.filename"
              class="min-w-[25%] max-w-[25%] transition-all duration-500 ease-in-out cursor-pointer"
              @click="openImg(image, index)"
            >
              <Carousel :image="image" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal enlarged image view -->
    <transition name="fade">
      <div
        v-if="selectedImage"
        class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        @click.self="closeImg"
      >
        <div class="relative max-w-4xl w-full px-4">
          <img
            :src="selectedImage.filename"
            :alt="selectedImage.alt || 'project image'"
            class="w-full h-auto object-contain rounded-lg shadow-lg"
          />
          <button
            class="absolute top-2 right-4 text-white p-2 rounded-full transition"
            @click="closeImg"
          >
            <XCircleIcon class="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
