<template>
  <div class=" flex flex-row justify-center w-full">
    <div class=" overflow-hidden w-full relative">
      <div class="relative w-full">
        <!-- Main Background -->
        <div class="w-full relative">
          <div
            class="w-full h-[770px] [background:linear-gradient(242deg,rgba(28,30,33,1)_0%,rgba(11,12,13,1)_100%)]"
          >
            <img
              class="w-[1038px] h-[690px] absolute top-[165px] right-0 object-cover"
              alt="Realistic abstract"
              src="public/img/Realistic Abstract 4 (3).png"
            />
            <img
              class="absolute w-full h-[735px] top-[86px]"
              alt="Dot grid"
              src="public/img/Dot grid.svg"
            />
            <div
              class="absolute w-[679px] h-[680px] top-[138px] left-[461px] rotate-[140.56deg]"
            >
              <div
                class="absolute w-[551px] h-[527px] top-[63px] left-[89px] bg-[#8d55a3] rounded-[275.36px/263.57px] rotate-[-20.36deg] blur-[114.05px]"
              />
            </div>
            <img
              class="absolute w-[710px] h-[769px] top-[0px] left-0"
              alt="Group"
              src="public/img/Group (5).png"
            />
            <img
              class="absolute w-[374px] h-[501px] top-[355px] right-0"
              alt="Group"
              src="public/img/Group2 (1).png"
            />
            <div
              class="absolute w-[381px] h-[282px] top-[376px] left-[1670px] rounded-[190.56px/140.99px] rotate-[-163.11deg] blur-[114.05px] [background:linear-gradient(32deg,rgba(141,85,163,1)_0%,rgba(53,32,61,1)_100%)]"
            />
          </div>
        </div>

        <!-- Our Clients Section -->
        <div
  class="flex flex-col items-center gap-9 absolute top-[206px] left-0 right-0 mx-auto px-4"
>
  <div class="text-4xl">
    <h1
      class="text-[length:var(--title-40-font-size)] max-w-[676px] font-title-40 font-[number:var(--title-40-font-weight)] text-white text-center tracking-[var(--title-40-letter-spacing)] leading-[var(--title-40-line-height)] [font-style:var(--title-40-font-style)]"
    >
      Our Clients
    </h1>
  </div>

  <div
    class="flex flex-col md:flex-row gap-8 mt-8 pb-4 w-full items-center justify-center"
  >
    <Card
      v-for="testimonial in testimonials"
      :key="testimonial.id"
      class="flex flex-col w-full max-w-xs md:w-[293px] h-auto bg-[#101113c9] rounded-2xl border-[0.5px] border-[#2d3032] shadow-[0px_1px_2px_#3a3a3a3d] backdrop-blur-[12.15px]"
    >
              <CardContent
                class="flex flex-col items-center gap-3.5 px-[31px] py-[21px]"
              >
                <div
                  class="flex flex-col h-[120px] items-center justify-center gap-4 p-4 w-full bg-[#19191d] rounded-2xl border-[0.5px] border-[#1f2122] shadow-[0px_1px_2px_#3a3a3a3d]"
                >
                  <div class="flex flex-col items-center gap-3 w-full">
                    <div
                      class="relative w-[57px] h-[57px] bg-[#403119] rounded-[999px]"
                    >
                      <img
                        class="absolute w-[57px] h-[57px] top-0 left-0 object-cover"
                        alt="Memoji"
                        :src="testimonial.avatar"
                      />
                    </div>
                    <div
                      class="font-title-18 font-[number:var(--title-18-font-weight)] text-[#e2e4e9] text-[length:var(--title-18-font-size)] tracking-[var(--title-18-letter-spacing)] leading-[var(--title-18-line-height)] [font-style:var(--title-18-font-style)]"
                    >
                      {{ testimonial.name }}
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <div class="flex items-center gap-1">
                    <div v-for="i in 5" :key="i" class="relative w-5 h-5">
                      <div class="relative h-5">
                        <img
                          class="absolute w-[18px] h-[17px] top-px left-px"
                          alt="Star background"
                          src="public/img/Star icon.svg"
                        />
                        <div class="absolute top-0 left-0 w-5 h-5">
                          <img
                            class="absolute w-[18px] h-[17px] top-px left-px"
                            alt="Star"
                            src="public/img/Star icon.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap"
                  >
                    5.0
                  </div>
                </div>

                <div
                  class="font-body-16 font-[number:var(--body-16-font-weight)] text-[#e2e4e9] text-[length:var(--body-16-font-size)] tracking-[var(--body-16-letter-spacing)] leading-[var(--body-16-line-height)] [font-style:var(--body-16-font-style)]"
                >
                  {{ testimonial.text }}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <!-- Decorative Elements -->
        <img
          class="absolute w-[682px] h-px top-[86px] left-[1528px] object-cover"
          alt="Swatch"
          src="public/img/Swatch 1.png"
        />
        <img
          class="w-[618px] h-[138px] absolute top-[717px] right-0 object-cover"
          alt="Realistic abstract"
          src="public/img/Realistic Abstract 3 (2).png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Data for testimonial cards
const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    avatar: "/img/Avatar [1.0].svg",
    rating: 5,
    text: '"From design to development, every step of our e-commerce website build was handled with professionalism and expertise. Our online store is now "',
  },
  {
    id: 2,
    name: "Sophia Williams",
    avatar: "/img/Avatar [1.0].svg",
    rating: 5,
    text: '"From design to development, every step of our e-commerce website build was handled with professionalism and expertise. Our online store is now user-friendly"',
  },
  {
    id: 3,
    name: "Sophia Williams",
    avatar: "/img/Avatar [1.0].svg",
    rating: 5,
    text: '"From design to development, every step of our e-commerce website build was handled with professionalism and expertise. Our online store is now user-friendly, "',
  },
  {
    id: 4,
    name: "Sophia Williams",
    avatar: "/img/Avatar [1.0].svg",
    rating: 5,
    text: '"From design to development, every step of our e-commerce website build was handled with professionalism and expertise. Our online store is now user-friendly, secure"',
  },
];
</script>
<style>

</style>
