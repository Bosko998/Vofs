<script setup lang="ts">
import type { Hero } from "~/component-types-sb";
import tailwindConfig from "~/tailwind.config";

type Props = { blok: Hero }
const props = defineProps<Props>();
const configColors = tailwindConfig.theme?.extend?.colors ?? {};
  const availableColors = [
  configColors.primaryColor,
  configColors.secondaryColor,
  configColors.tealColor,
  configColors.lightBlue
].filter(Boolean); // Remove undefined values

const circleDetails = computed(()=>{
  return props.blok.circleDetails
  .replaceAll('\n','')
  .split(',')
  .map((item,index)=>{
    const [number, ...text] = item.split(' ');
    return { key: number, value: text.join(' '),color: availableColors[index]|| '#1C75BC' }  // Include 'extra' if it exists
       
  })
});
</script>
<template>
  <div
    class="bg-cover bg-center bg-no-repeat my-16 p-8 w-4/5 h-[35rem] mx-auto flex flex-col justify-between"
    v-editable="props.blok"
     :style="{ backgroundImage: `url('${props.blok.backgroundPic.filename}')` }"
  >
    <div>
      <HeaderComponent class="text-start">{{ props.blok.headline }}</HeaderComponent>
    </div>

    <!-- Circles Container -->
    <div class="flex flex-wrap gap-8 md:gap-12 items-center">
      <div
        v-for="(circleElement, key) in circleDetails"
        :key="key"
      >
        <HeroCircle :circleElement="circleElement" />
      </div>
    </div>
  </div>
</template>


