<template>
    <div class="my-container text-white z-10 py-8 my-16">
      <!-- <div class="absolute inset-0 bg-[#0B334F]/30 -z-10 pointer-events-none"></div> -->
    <!-- <div class="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_2px)] opacity-0 animate-pulse animation-delay-[2s] transform scale-[0.2] translate-x-[500px] translate-y-[50px]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_2px)] opacity-0 animate-pulse animation-delay-[1s] transform scale-[0.5] translate-x-[200px] translate-y-[20px]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_2px)] opacity-0 animate-pulse animation-delay-[3s] transform scale-[0.3] translate-x-[50px] translate-y-[150px]"></div> -->
      <LazyAppHeader />
      <slot />
      <LazyAppFooter />
    </div>
  </template>

<style scoped>
.my-container {
  /* background-image: url('../assets/images/bg-cover.jpg');
  position: relative;
  background-repeat: no-repeat;
 background-position-x:center;
  background-size: cover;
  color: white; */
}

.my-container::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-image: url('~/assets/images/bg-cover.jpg');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    z-index: -10;
  }

</style>