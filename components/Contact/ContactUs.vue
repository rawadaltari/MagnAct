<template>
  <div class="flex flex-row justify-center w-full">
    <div class="overflow-hidden w-full relative">
      <div class="relative w-full">
        <!-- Main background -->
        <div
          class="w-full h-[770px] [background:linear-gradient(242deg,rgba(28,30,33,1)_0%,rgba(11,12,13,1)_100%)]"
        >
          <img
            class="absolute w-full h-[735px]"
            alt="Dot grid"
            src=""
          />
        </div>

        <!-- Background elements -->
        <div
          class="absolute w-[679px] h-[680px] top-[138px] left-[662px] rotate-[140.56deg]"
        >
          <div
            class="absolute w-[551px] h-[527px] top-[63px] left-[89px] bg-[#8d55a3] rounded-[275.36px/263.57px] rotate-[-20.36deg] blur-[114.05px]"
          />
        </div>
        <!-- Side image -->
        <img
          class="absolute h-[769px] top-0 left-0"
          alt="Group"
          src="/img/Group-5.png"
        />
        <img
          class="absolute h-[769px] top-0 right-0"
          alt="Group"
          src="/img/group2.png"
        />
        <!-- Contact Us Section -->
        <section
          class="absolute top-[150px] left-[50%] mx-auto flex flex-col items-center gap-9"
        >
          <h2 class="text-white font-title-40 text-[40px] text-center">
            Contact Us
          </h2>

          <div
            class="flex flex-col w-[640px] items-center justify-center gap-5"
          >
            <!-- Name -->
            <div class="w-full">
              <input
                v-model="name"
                class="w-full bg-[#212224] text-white border border-[#d0d5dd4f] h-12 px-3.5 py-3 rounded-lg"
                placeholder="Enter your name"
              />
              <p v-if="errors.name" class="text-red-400 text-sm mt-1">
                {{ errors.name }}
              </p>
            </div>

            <!-- Email -->
            <div class="w-full">
              <input
                v-model="email"
                type="email"
                class="w-full bg-[#212224] text-white border border-[#d0d5dd4f] h-12 px-3.5 py-3 rounded-lg"
                placeholder="Enter your email"
              />
              <p v-if="errors.email" class="text-red-400 text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>

            <!-- Phone -->
            <div class="w-full">
              <div
                class="flex items-center bg-[#212224] text-white border border-[#d0d5dd4f] rounded-lg px-3.5 py-3"
              >
                <img
                  class="w-[26px] h-[26px] object-cover"
                  alt="UAE"
                  src="/img/united-arab-emirates.png"
                />
                <div class="relative w-3 h-6 mx-2">
                  <img
                    class="absolute w-3 h-3 top-0 left-0"
                    alt="Icon up"
                    src="/img/Upbold.png"
                  />
                  <img
                    class="absolute w-3 h-3 top-3 left-0"
                    alt="Icon down"
                    src="/img/Down.png"
                  />
                </div>
                <img
                  class="w-px h-[34px] mx-2"
                  alt="Line"
                  src="/img/Line.png"
                />
                <span class="text-[#a7a7a7] font-body-16 mr-2">+971</span>
                <input
                  v-model="phone"
                  type="tel"
                  placeholder="50 123 4567"
                  class="bg-transparent text-white font-body-16 focus:outline-none flex-1"
                />
              </div>
              <p v-if="errors.phone" class="text-red-400 text-sm mt-1">
                {{ errors.phone }}
              </p>
            </div>

            <!-- Message -->
            <div class="w-full">
              <textarea
                v-model="message"
                class="w-full bg-[#212224] text-white border border-[#d0d5dd4f] h-[97px] px-3.5 py-3 resize-none rounded-lg"
                placeholder="your message..."
              />
              <p v-if="errors.message" class="text-red-400 text-sm mt-1">
                {{ errors.message }}
              </p>
            </div>

            <!-- Send Button -->
            <button
              @click="sendMessage"
              class="w-[152px] h-[58px] bg-[#1c1e2094] rounded-2xl border border-[#fcfcfc0d] backdrop-blur-[30.35px] p-0"
            >
              <div
                class="flex w-[142px] items-center justify-center gap-1.5 px-[26px] py-3.5 m-[5px] rounded-xl border-none  [background:linear-gradient(180deg,rgba(108,108,108,0.15)_0%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(54,78,162,1)_0%,rgba(54,78,162,1)_100%)]"
              >
                <span
                  class=" font-normal text-textwhite text-base"
                >
                  Send
                </span>
              </div>
            </button>

            <!-- Success Message -->
            <p v-if="success" class="text-green-400 font-bold">
              تم الإرسال بنجاح ✅
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContactForm } from './UseContact';
import './Contact.css'
const {
  name,
  email,
  phone,
  message,
  success,
  errors,
  sendMessage,
} = useContactForm()
</script>

<style scoped>

</style>
