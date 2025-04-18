<template>
  <div class="flex flex-row w-full xl:px-0">
    <div class="overflow-hidden w-full max-w-full relative">
      <!-- Main section with gradient background -->
      <section class="relative w-full max-w-full">
        <div class="w-full min-h-[770px] bg-gradient-to-br from-[#1c1e21] to-[#0b0c0d] relative">
          <!-- Background elements -->
          <img
            class="absolute w-full h-[735px] top-0 left-0 object-cover"
            alt="Dot grid"
            src=""
          />

          <div class="absolute w-[679px] h-[680px] top-[52px] left-[-688px] rotate-[140.56deg]">
            <div
              class="absolute w-[551px] h-[527px] top-[63px]  bg-[#8d55a3] rounded-[275.36px/263.57px] rotate-[-20.36deg] blur-[114.05px]"
            />
          </div>

          <img
            class="absolute w-[534px] h-[756px] top-0 left-0 object-cover"
            alt="Group"
            src="/img/Group.png"
          />
          <img
            class="absolute w-[404px] h-full top-20 right-0 object-cover"
            alt="Group"
            src="/img/1.png"
          />
          <img
            class="absolute w-[534px] h-[756px] top-30 right-0 object-cover"
            alt="Group"
            src="/img/group2.png"
          />

          <!-- Footer -->
          <footer
            class="flex flex-col w-full items-center justify-center gap-[39px] px-4 sm:px-8 md:px-16 lg:px-0 py-[30px] absolute bottom-0 bg-[#1b1d1fc9]"
          >
            <div
              class="flex flex-col md:flex-row items-center justify-between w-full max-w-[1240px] gap-y-6"
            >
              <!-- Social media icons -->
              <div class="flex items-center justify-center md:justify-start w-full md:w-auto gap-[30px] sm:gap-[40px] md:gap-[50px]">
                <img class="w-[26px] h-[26px]" alt="Facebook" src="/img/facebook.svg" />
                <img class="w-[26px] h-[26px]" alt="Whatsapp" src="/img/whatsapp.svg" />
                <img class="w-[26px] h-[26px]" alt="Telephone" src="/img/telephone-fill.svg" />
                <img class="w-[26px] h-[26px]" alt="Instagram" src="/img/instagram.svg" />
                <img class="w-[26px] h-[26px]" alt="Linkedin" src="/img/linkedin.svg" />
              </div>

              <!-- Logo -->
              <div class="flex flex-col items-start justify-center gap-10">
                <div class="flex flex-col items-start justify-center gap-2.5">
                  <!-- Logo 1 -->
                  <div class="logo1-container">
                    <img
                      class="logo1-img"
                      alt="Logo1"
                      src="/img/logo-1.png"
                    />
                  </div>

                  <!-- Logo 2 -->
                  <div class="logo2-container">
                    <img
                      class="logo2-img"
                      alt="Logo2"
                      src="/img/logo2.png"
                    />
                  </div>
                </div>
              </div>

              <!-- About us button -->
              <div
                class="w-full sm:w-[252px] h-[58px] bg-[#1c1e2094] rounded-2xl overflow-hidden border border-solid border-[#fcfcfc0d] backdrop-blur-[30.35px]"
              >
                <button
                  class="flex w-full sm:w-[237px] items-center justify-center gap-4 px-[26px] py-3.5 mt-[5px] mx-auto rounded-xl border-none shadow-[0px_0px_0px_2px_#133367,0px_1px_2px_#0d1f3d80] bg-gradient-to-b from-[#6c6c6c26] to-transparent bg-[#364ea2]"
                >
                  <span class="text-white font-normal text-base leading-5 whitespace-nowrap">
                    About us and portfolio
                  </span>
                  <img class="w-4 h-4" alt="Arrow" src="/img/box-arrow-in-down.svg" />
                </button>
              </div>
            </div>

            <!-- Separator -->
            <div class="w-full max-w-[1240px] h-px bg-transparent border-t border-gray-700" />

            <!-- Copyright -->
            <div class="flex items-center justify-center gap-[11px] mb-[-18px]">
              <p class="text-neutral-100 font-normal text-base tracking-[-0.10px] leading-5 whitespace-nowrap">
                © 2025 MagnAct
              </p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.logo1-container {
  width: 88px;
  height: 88px;
  border-radius: 9999px;
  overflow: hidden;
  background: linear-gradient(to bottom, #6c6c6c26, transparent);
  box-shadow: 0px 1px 2px #39393980;
}

.logo1-img {
  width: 50px;
  height: 58px;
  margin-top: 15px;
  margin-left: 19px;
  object-fit: cover;
}

.logo2-container {
  width: 86px;
  height: 42px;
  box-shadow: 0px 1px 2px #39393980;
}

.logo2-img {
  width: 86px;
  height: 21px;
  margin-top: 13px;
}

/* Responsive for mobile devices */
@media (max-width: 640px) {
  .logo1-container {
    width: 60px;
    height: 60px;
  }

  .logo1-img {
    width: 36px;
    height: 42px;
    margin-top: 9px;
    margin-left: 12px;
  }

  .logo2-container {
    width: 60px;
    height: 30px;
  }

  .logo2-img {
    width: 50px;
    height: 16px;
    margin-top: 7px;
  }
}
</style>
