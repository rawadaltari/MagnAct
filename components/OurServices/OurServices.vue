<template>
    <div class="flex flex-col items-center w-full bg-gradient-to-bl from-[#1c1e21] to-[#0b0c0d] relative overflow-hidden">
      <!-- Dot Grid + Gradient Background -->
      <img class="absolute top-0 left-0 w-full h-auto pointer-events-none opacity-30" src="" alt="Dot grid" />
  
      <!-- Purple Blob -->
      <div class="absolute top-32 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] blur-3xl bg-[#8d55a3] rounded-full opacity-50"></div>
  
      <!-- Section Title -->
      <div class="text-white text-3xl md:text-5xl font-bold text-center mt-28 mb-16 z-10">Our Services</div>
  
      <!-- Cards Container -->
      <div class="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center px-4 z-10">
        <!-- Card 1 -->
        <div class="w-full sm:w-[90%] md:w-[500px] lg:w-[528px] bg-[#101113c9] backdrop-blur-md border border-[#2d3032] rounded-2xl p-6 flex flex-col gap-4">
          <div class="w-full h-[180px] bg-[#1a1a1d] rounded-2xl"></div>
          <div class="text-[#f0f0f0] text-lg font-semibold text-center">Web & Mobile Development</div>
          <p class="text-[#e2e4e9] text-base text-center">
            Website Design and Development (Corporate websites, e-commerce, blogs). Mobile App Development (Android & iOS).
          </p>
        </div>
  
        <!-- Card 2 -->
        <div class="w-full sm:w-[90%] md:w-[340px] bg-[#101113c9] backdrop-blur-md border border-[#2d3032] rounded-2xl p-6 flex flex-col gap-4">
          <div class="w-full h-[150px] bg-[#1a1a1d] rounded-xl"></div>
          <div class="text-[#f0f0f0] text-lg font-semibold text-center">Digital Marketing & Ads</div>
        </div>
  
        <!-- Card 3 -->
        <div class="w-full sm:w-[90%] md:w-[340px] bg-[#101113c9] backdrop-blur-md border border-[#2d3032] rounded-2xl p-6 flex flex-col gap-4">
          <div class="w-full h-[150px] bg-[#1a1a1d] rounded-xl"></div>
          <div class="text-[#f0f0f0] text-lg font-semibold text-center">Graphic Design & Branding</div>
        </div>
      </div>
  
      
  
      <!-- Abstract Image -->
      <img class="w-64 h-auto mt-16 opacity-60" src="/img/picture2.png" alt="Abstract" />
    </div>
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped>

  </style>
  