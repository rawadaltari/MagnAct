<template>
  <header
    :class="['w-full z-50 bg-transparent', isMobile ? 'relative' : 'fixed top-0 left-0']"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div class="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center gap-2 flex-shrink-0 bg-[#1c1e2094] rounded-2xl border border-[#fcfcfc0d] backdrop-blur-[30.35px] p-2 sm:p-3 w-fit">
          <div class="w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#6c6c6c26] to-transparent shadow">
            <img
              class="w-6 h-6 sm:w-[26px] sm:h-[30px] object-contain"
              src="img/logo1.png"
              alt="Logo"
            />
          </div>
          <div class="w-20 h-5 sm:w-[86px] sm:h-[21px]">
            <img
              class="w-full h-full object-contain"
              src="img/logo2.png"
              alt="MagnAct"
            />
          </div>
        </div>

        <!-- Navigation Menu (center in desktop) -->
        <div
          class="hidden sm:flex items-center justify-center bg-[#1c1e2094] rounded-2xl border border-[#fcfcfc0d] backdrop-blur-[30.35px] px-4 py-2"
        >
          <nav class="flex items-center gap-6">
            <NuxtLink
              v-for="(item, index) in navItems"
              :key="index"
              :to="item.href"
              class="text-white text-sm font-medium hover:text-blue-400 transition"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact Button (right) -->
        <div class="hidden sm:flex justify-end">
          <NuxtLink
            to="#"
            class="px-4 py-2 rounded-xl bg-gradient-to-b from-[#6c6c6c26] to-transparent border border-[#fcfcfc0d] shadow text-white text-sm hover:bg-[#2a3d7a] transition"
          >
            Contact us
          </NuxtLink>
        </div>

        <!-- Mobile: Right side buttons -->
        <div class="flex sm:hidden items-center gap-2">
          <NuxtLink
            to="#"
            class="bg-[#1c1e2094] rounded-xl px-3 py-2 text-white text-sm font-medium border border-[#fcfcfc0d] backdrop-blur-[30.35px] hover:bg-[#2a3d7a] transition"
          >
            Contact
          </NuxtLink>

          <button
            @click="isMenuOpen = !isMenuOpen"
            class="bg-[#1c1e2094] rounded-xl p-2 border border-[#fcfcfc0d] backdrop-blur-[30.35px] text-white"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="sm:hidden mt-2 bg-[#1c1e2094] rounded-2xl border border-[#fcfcfc0d] backdrop-blur-[30.35px] p-4"
        >
          <nav class="flex flex-col gap-4">
            <NuxtLink
              v-for="(item, index) in navItems"
              :key="index"
              :to="item.href"
              class="text-white text-sm font-medium hover:text-blue-400 transition"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const navItems = [
  { label: "Portfolio", href: "#" },
  { label: "Our Team", href: "#" },
  { label: "Our clients", href: "#" },
  { label: "Services", href: "#" },
];

const isMenuOpen = ref(false);
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 640;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 640;
  });
});
</script>

<style scoped>
nav a {
  position: relative;
  padding-bottom: 2px;
}
nav a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}
nav a:hover::after {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
