<script setup lang="ts">
type Props ={circleElement: {key:string,value:string,extra?:string|null,color:string}};
  
//Animacija od 0 do 50...
const props = defineProps<Props>();
</script>

<template>
  <div>
    <!-- SVG Circle with Text in the middle -->
    <svg width="120" height="120" viewBox="0 0 120 120">
      <!-- Circle -->
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
       :stroke=props.circleElement.color
        stroke-width="4"
        stroke-dasharray="60 15" 
        
      />
        <!-- Number of days -->
        <text x="53%" y="55%" text-anchor="middle" stroke="white" font-size="22" fill="white">
       {{ props.circleElement.key }}
        </text>
    </svg>
  </div>
    <div class="text-center min-h-[50px]">
      <p>{{ props.circleElement.value }}</p>
      <p v-if="props.circleElement.extra">{{ props.circleElement.extra }}</p>
    </div>

</template>


