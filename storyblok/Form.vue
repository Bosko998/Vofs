<script setup lang="ts">
import type { Form } from "~/component-types-sb.js";
import type { ContactFormData } from "~/server/api/send-email.post";
import {toast} from 'vue3-toastify'
type Props = { blok: Form };
const props = defineProps<Props>();
const isSubmitting = ref(false);
async function onSubmit(ContactFormData:ContactFormData) {
  if(isSubmitting.value) return;
  isSubmitting.value = true;
  toast.success('Yeey')
    try {
        const res = await $fetch('/api/send-email',{
            method:'POST',
            body: ContactFormData
        })
        alert 
    } catch (error) {
        console.error(error);
        toast.error('Oooops... something went wrong');
        
    }finally{
      isSubmitting.value = false;
    }
}
</script>
<template>
  <div
    v-editable="props.blok"
    class="flex flex-col items-center my-16 p-16 border-2 rounded-xl backdrop-blur-md border-indigo-500"
  >
    <FormKit
      type="form"
      :submit-label="isSubmitting ? 'Slanje...' : 'Pošalji'"
      :disabled="isSubmitting"
      @submit="onSubmit"
      :classes="{
        actions:
          'flex cursor-pointer justify-center mt-6 bg-transparent border-2 border-lightBlue/30 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200 ',
      }"
    >
      <StoryblokComponent
        v-for="(item, index) in props.blok.items"
        :key="index"
        :blok="item"
      />
    </FormKit>
  </div>
</template>
