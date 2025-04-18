<template>
  <div class="relative w-full overflow-hidden bg-gradient-to-br from-[#1c1e21] to-[#0b0c0d] min-h-[100vh] flex items-center justify-center">
    <!-- زخرفة الكرة -->
    <div class="hidden lg:block absolute w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] top-[-10vw] left-[-15vw] rotate-[140deg] z-0">
      <div class="relative w-full h-full">
        <div class="absolute w-[60%] h-[60%] top-[25%] left-[30%] bg-[#8d55a3] rounded-full rotate-[-20deg] blur-[130px] opacity-60" />
        <img
          src="/img/12.png"
          alt="3D Decoration"
          class="absolute w-[70%] h-[70%] top-[15%] left-[15%] rotate-[-140deg] object-contain"
        />
      </div>
    </div>

    <!-- خلفية النقاط -->
    <img
      src=""
      alt="Dot Grid"
      class="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
    />

    <!-- المحتوى -->
    <div class="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32 sm:py-36 md:py-40 max-w-3xl mx-auto">
      <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
        About Us
      </h1>
      <p class="text-transparent bg-gradient-to-b from-white to-transparent bg-clip-text text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-8 lg:leading-10">
        MagnAct is a company specialized in digital solutions, offering integrated services in programming, marketing, and design. We started with a clear vision: to make a real difference in the digital world by providing high-quality services that help businesses and individuals achieve their goals.
      </p>
    </div>
  </div>
</template>
