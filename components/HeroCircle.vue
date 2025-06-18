<script setup lang="ts">
//import confetti from 'canvas-confetti';

type Props = {
  circleElement: {
    key: string;
    value: string;
    color: string;
  };
};

const props = defineProps<Props>();
const animatedValue = ref(0);
//const showTada = ref(false);
onMounted(() => {
  const target = parseInt(props.circleElement.key);
  const duration = 1000; // total animation duration in ms
  const start = performance.now();

  const animate = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1); // clamp between 0 and 1

    // Easing function (easeOutQuad)
    const easedProgress = 1 - Math.pow(1 - progress, 2);

    animatedValue.value = Math.round(easedProgress * target);

    if (progress < 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      requestAnimationFrame(animate);
    } else {
      // showTada.value = true;
      // confetti({
      //   particleCount: 50,
      //   spread: 70,
      //   origin: {x:0.15, y: 0.9 },
      // });
    }
  };

  requestAnimationFrame(animate);
});

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
       {{ animatedValue}}+
        </text>
    </svg>
  </div>
    <div class="text-center min-h-[50px] max-w-[100px] mx-auto my-0">
      <p>{{ props.circleElement.value }}</p>
      <!-- <p v-if="props.circleElement.extra">{{ props.circleElement.extra }}</p> -->
    </div>

</template>


