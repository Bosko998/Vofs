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
    const [first, second,third] = item.split(' ');
    return { key: first, value: second, extra: third||null,color: availableColors[index]|| '#1C75BC' }  // Include 'extra' if it exists
       
  })
});

</script>
<template>
  <div
    class="bg-cover bg-center bg-no-repeat my-16 p-8 w-full h-[35rem] flex flex-col justify-between"
    v-editable="props.blok"
    :style="{ backgroundImage: `url('${props.blok.backgroundPic.filename}')` }"
  >
    <div>
      <h1 class="text-2xl">{{ props.blok.headline }}</h1>
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


