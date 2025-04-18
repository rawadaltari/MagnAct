<template>
  <div class="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
    
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float1"></div>
      <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float2"></div>
      <div class="absolute bottom-1/4 left-1/3 w-60 h-60 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float3"></div>
    </div>

    
    <div class="z-10 w-full max-w-6xl px-6 py-20">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span class="inline-block">Where Innovation</span><br />
        <span class="inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Magnetizes Success
        </span>
      </h1>
      
      <p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        We gonna magnetic your ideas to reality
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-12">
        <button class="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all transform hover:scale-105">
          Get Started
        </button>
        <button class="px-8 py-3 border border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>

    
    <div class="absolute bottom-0 w-full pointer-events-none">
      <img 
        src="/img/pic1.png" 
        alt="Crystal" 
        class="w-full max-w-6xl mx-auto transition-all duration-300"
        :class="{'scale-95': isHovered, 'scale-100': !isHovered}"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isHovered = ref(false);
</script>

<style>

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-20px, -20px) rotate(2deg); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(15px, 15px) rotate(-2deg); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(10px, -10px) rotate(1deg); }
}

.animate-float1 {
  animation: float1 8s ease-in-out infinite;
}
.animate-float2 {
  animation: float2 10s ease-in-out infinite;
}
.animate-float3 {
  animation: float3 12s ease-in-out infinite;
}
</style>