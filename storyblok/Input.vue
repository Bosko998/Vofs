<script setup lang="ts">
import type { Input } from "~/component-types-sb.js";
type Props = { blok: Input };
const props = defineProps<Props>();
const save = ref(null);
const styles = reactive({
  input:
    "w-full text-white bg-primaryColor/10 border border-lightBlue/30 rounded px-3 py-2 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder:text-sm placeholder:opacity-75",
});
</script>
<template>
  <FormKit
    :type="props.blok.choices"
    :name="props.blok.name"
    :label="props.blok.label"
    :validation="
      props.blok.validation
        ? props.blok.choices === 'email'
          ? 'required|email|ends_with:.com'
          : props.blok.choices === 'number'
            ? 'required|numbeic'
            : 'required'
        : ''
    "
    :placeholder="props.blok.placeholder"
    :validation-messages="{
      required: props.blok.requiredText,
      email: props.blok.choices === 'email' && 'Unesite ispravnu email adresu.',
    }"
    :classes="{
      outer: 'mb-4',
      label: 'block  font-medium mb-1',
      input: styles.input,
      messages: 'text-sm text-red-500 mt-1',
    }"
  />
</template>
{"_uid":"5d2d46b6-ebfb-4b5b-ac7f-ae71265c8496","name":"name","label":"Ime","choices":"text","component":"input","validation":true,"placeholder":"","requiredText":"Ovo
polje je obavezno.","_editable":"<!--#storyblok#{\"name\": \"input\", \"space\": \"310626\", \"uid\": \"5d2d46b6-ebfb-4b5b-ac7f-ae71265c8496\", \"id\": \"658277468\"}-->"}
