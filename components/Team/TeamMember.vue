<template>
  <div class="flex flex-row justify-center w-full">
    <div class="overflow-hidden w-full min-h-screen sm:h-[769px] relative">
      <!-- Background elements -->
      <div
        class="absolute w-full h-full top-0 left-0 [background:linear-gradient(242deg,rgba(28,30,33,1)_0%,rgba(11,12,13,1)_100%)]"
      >
        <img
          class="absolute w-full h-full object-cover"
          alt="Dot grid"
          src="img/Dot grid.svg"
        />
        <img
          class="absolute w-full h-full object-cover"
          alt="Swatch"
          src="img/Swatch 1.png"
        />
        <div
          class="absolute w-[679px] h-[680px] top-[138px] left-[461px] rotate-[140.56deg]"
        >
          <div
            class="absolute w-[551px] h-[527px] top-[63px] left-[89px] bg-[#8d55a3] rounded-[275.36px/263.57px] rotate-[-20.36deg] blur-[114.05px]"
          />
        </div>
      </div>

      <!-- Main Content - Our Team Section -->
      <div class="absolute w-full h-full top-0 left-0">
        <!-- Section Title and Image -->
        <div
          class="inline-flex flex-col items-center text-3xl gap-9 absolute top-[206px] left-[382px] w-full"
        >
          <h1
            class="text-[length:var(--title-40-font-size)] relative w-[676px] mt-[-1.00px] font-title-40 font-[number:var(--title-40-font-weight)] text-white text-center tracking-[var(--title-40-letter-spacing)] leading-[var(--title-40-line-height)] [font-style:var(--title-40-font-style)]"
          >
            Our Team
          </h1>

          <!-- Arrows with Image -->
          <div class="relative w-fit mx-auto flex items-center justify-center">
            <!-- Left Arrow (Hidden on small screens) -->
            <button
              @click="prevSlide"
              class="hidden sm:flex absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 w-9 h-9 bg-white bg-opacity-80 rounded-full shadow items-center justify-center"
            >
              <ArrowLeftIcon class="h-5 w-5 text-black" />
            </button>

            <!-- Member Image -->
            <img
              :src="activeMemberData.teamImage"
              :alt="activeMemberData.name"
              class="transition-all duration-500 ease-in-out max-h-[260px] sm:max-h-none object-contain z-0"
            />

            <!-- Right Arrow (Hidden on small screens) -->
            <button
              @click="nextSlide"
              class="hidden sm:flex absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 w-9 h-9 bg-white bg-opacity-80 rounded-full shadow items-center justify-center"
            >
              <ArrowRightIcon class="h-5 w-5 text-black" />
            </button>
          </div>
        </div>

        <!-- Member Info -->
        <div
          class="flex flex-col w-[593px] items-start justify-center gap-[38px] absolute top-[298px] left-[108px]"
        >
          <div
            class="flex flex-col items-start text-4xl gap-4 relative self-stretch w-full"
          >
            <h2
              class="text-white text-[length:var(--title-40-font-size)] font-title-40"
            >
              {{ activeMemberData.name }}
            </h2>
            <p
              class="text-[#d1d1d1] text-[length:var(--body-16-font-size)] font-body-16"
            >
              {{ activeMemberData.role }}
            </p>
          </div>
          <p
            class="text-[#d1d1d1] text-[length:var(--title-18-font-size)] font-title-18"
          >
            {{ activeMemberData.description }}
          </p>
        </div>

        <!-- Team Members Carousel -->
        <div
          class="absolute w-full h-[244px] bottom-0 left-0 bg-[#3b3b3b9e] backdrop-blur-[4.5px] hidden sm:block"
        >
          <div
            class="flex items-center justify-between px-4 py-4 relative h-full"
          >
            <!-- Team Members List -->
            <div
              ref="carousel"
              class="flex items-center gap-7 overflow-x-auto px-16 w-full snap-x snap-mandatory"
              @scroll="handleScroll"
            >
              <div
                v-for="member in teamMembers"
                :key="member.id"
                class="flex-none snap-center flex flex-col items-center gap-3 lg:gap-4"
                :class="{ 'active-member': member.id === activeMember }"
                @click="setActiveMember(member.id)"
              >
                <!-- Avatar -->
                <div
                  v-if="member.avatar"
                  :class="[
                    'overflow-hidden rounded-full border border-[#787878]',
                    member.id === 1
                      ? 'w-[103px] h-[103px]'
                      : 'w-[60px] h-[60px]',
                  ]"
                >
                  <img
                    :src="member.avatar"
                    :alt="member.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div
                  v-else
                  :class="[
                    'bg-[#d9d9d9] rounded-full flex items-center justify-center text-black font-bold',
                    member.id === 1
                      ? 'w-[103px] h-[103px]'
                      : 'w-[60px] h-[60px]',
                  ]"
                >
                  {{ member.name.charAt(0) }}
                </div>

                <!-- Name -->
                <h3
                  class="text-white text-center font-title-18 text-[var(--title-18-font-size)] leading-[var(--title-18-line-height)]"
                  :class="
                    member.id === 1 ? '[-webkit-text-stroke:0.5px_#ffffff]' : ''
                  "
                >
                  {{ member.name }}
                </h3>

                <!-- Role -->
                <p
                  class="text-[#d1d1d1] text-sm text-center font-normal leading-[22.3px] font-[Nova_Round]"
                >
                  {{ member.role }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Arrows -->

        <div
          class="sm:hidden absolute flex justify-between items-center w-full top-[295px] z-20"
        >
          <button
            @click="prevSlide"
            class="w-10 h-10 bg-transparent border-2 border-white text-white rounded-full shadow"
          >
            <ArrowLeftIcon class="h-5 w-5 mx-auto" />
          </button>
          <button
            @click="nextSlide"
            class="w-10 h-10 bg-transparent border-2 border-white text-white rounded-full shadow"
          >
            <ArrowRightIcon class="h-5 w-5 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-vue-next";
import "@/assets/css/Team.css";
import { useTeamMembers } from "./UseTeam";

const {
  teamMembers,
  carousel,
  activeMember,
  activeMemberData,
  setActiveMember,
  prevSlide,
  nextSlide,
  handleScroll,
} = useTeamMembers();
</script>
