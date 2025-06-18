<script setup lang="ts">
import type { contactSection } from "~/component-types-sb.js";
type Props = { blok: contactSection };
const props = defineProps<Props>();
const save = ref(null);
const styles = reactive({
  input:'w-full text-white bg-primaryColor/10 border border-lightBlue/30 rounded px-3 py-2 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder:text-sm placeholder:opacity-75'
})
</script>

<template>
  <div
    v-editable="props.blok"
    class="flex justify-center items-center flex-col"
  >
    <HeaderComponent class="text-">{{ blok.header }}</HeaderComponent>
    <div
      class="flex flex-col items-center my-16 p-16 border-2 rounded-xl backdrop-blur-md border-indigo-500"
    >
    <FormKit
  type="form"
  submit-label="Pošalji"
  @submit="save"
  :classes="{
    actions: 'flex cursor-pointer justify-center mt-6 bg-transparent border-2 border-lightBlue/30 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200 ',
  }"
>
  <h2 class="text-2xl font-bold text-center ">Pošaljite nam poruku</h2>
  <p class="text-base text-center  mb-4">
    Recite nam nešto više o sebi i javićemo vam se u roku od 24 sata.
  </p>

  <FormKit
    type="text"
    name="name"
    label="Ime"
    validation="required"
    :validation-messages="{
    required: 'Ovo polje je obavezno.',
  }"
    :classes="{
      outer: 'mb-4',
      label: 'block  font-medium mb-1',
      input: styles.input,
      messages: 'text-sm text-red-500 mt-1'
    }"
  />

  <FormKit
    type="text"
    name="surname"
    label="Prezime"
    validation="required"
    :validation-messages="{
    required: 'Ovo polje je obavezno.',
  }"
    :classes="{
      outer: 'mb-4',
      label: 'block  font-medium mb-1',
      input: styles.input,
      messages: 'text-sm text-red-500 mt-1'
    }"
  />

  <FormKit
    type="email"
    name="email"
    label="Email"
    validation="required|email|ends_with:.com"
    validation-visibility="live"
    placeholder="vofs@vofs.com"
    :validation-messages="{
    required: 'Ovo polje je obavezno.',
    email: 'Unesite ispravnu email adresu.'
  }"
    :classes="{
      outer: 'mb-4',
      label: 'block  font-medium mb-1',
      input: styles.input,
      messages: 'text-sm text-red-500 mt-1'
    }"
/>

  <FormKit
    type="textarea"
    name="about"
    label="Reci nam nešto više o tebi"
    validation-visibility="live"
    :validation-messages="{
      required: 'Ovo polje je obavezno.',
    }"
    :classes="{
      outer: 'mb-4',
      label: 'block font-medium mb-1',
      input: styles.input,
      messages: 'text-sm text-red-500 mt-1'
    }"
/>

</FormKit>

    </div>
  </div>
</template>
