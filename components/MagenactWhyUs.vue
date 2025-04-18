<template>
  <main class="flex justify-center w-full">
    <div class="overflow-hidden w-full relative">
      <!-- Background elements -->
      <div class="relative w-full min-h-[600px] lg:h-[769px]">
        <div class="absolute w-full h-full bg-gradient-to-br from-[#1c1e21] to-[#0b0c0d]">
          <img
            class="absolute w-full h-full object-cover"
            alt="Dot grid"
            src=""
          />
        </div>

        <!-- Abstract elements -->
        <div class="absolute left-0 top-1/4 w-1/2 h-1/2 hidden sm:block">
          <div
            class="w-[551px] h-[527px] rounded-[275px/263px] absolute bg-[#8d55a3] blur-[114px] opacity-50"
          />
          <img
            class="absolute w-[510px] h-[558px] object-contain"
            alt="Abstract element"
            src="/img/111111.png"
          />
        </div>

        <img
          class="absolute right-0 bottom-0 h-[600px] object-cover z-0"
          alt="Realistic abstract"
          src="/img/Realistic-Abstract-3.png"
        />

        <!-- Main content -->
        <section
          class="absolute top-[220px] lg:top-[263px] left-1/2 transform -translate-x-1/2 z-10 px-4 w-full max-w-[768px]"
        >
          <div class="flex flex-col gap-6 sm:gap-9">
            <h1
              class="text-center text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight"
            >
              Why Choose Us
            </h1>
            <p
              class="text-center text-white text-base sm:text-lg md:text-xl leading-relaxed"
            >
              Strong Experience: A team of professionals with over six years of expertise in various digital fields.
              Exceptional Quality: We pay close attention to detail to ensure highly professional services.
            </p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (max-width: 768px) {
  section.absolute {
    top: 140px !important;
  }

  h1 {
    font-size: 1.75rem !important;
  }

  p {
    font-size: 1rem !important;
    line-height: 1.6;
  }

  .absolute.left-0.top-1\/4.w-1\/2.h-1\/2 {
    display: none;
  }

  img.absolute.right-0.bottom-0 {
    height: 220px;
  }
}
</style>
