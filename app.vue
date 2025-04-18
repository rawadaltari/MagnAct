<script setup lang="ts">
import ContactUs from "./components/Contact/ContactUs.vue";
import FooterSection from "./components/FooterSection.vue";
import Header from "./components/Header/Header.vue";

import MagenactOurVision from "./components/OurVison/MagenactOurVision.vue";
import PortfolioSection from "./components/Portfolio/PortfolioSection.vue";
import MagenactWhyUs from "./components/MagenactWhyUs.vue";
import OurClients from "./components/OurClients.vue";
import TeamMember from "./components/Team/TeamMember.vue";
import OurServices from "./components/OurServices/OurServices.vue";
</script>

<template>
  
    
  
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
    <!-- Navigation -->
    <Header />

    <!-- Hero Section -->
    <HeroSection />
    <!-- About Section -->
    <AboutSection />
    <MagenactOurVision />
    <MagenactWhyUs />
    <!-- Portfolio Section -->

    <PortfolioSection />
    <OurServices/>
    <TeamMember />
    <OurClients />
    <ContactUs />
    <FooterSection />
  </div>

</template>

<style>
body {
  font-family: "Space Grotesk", sans-serif;
  scroll-behavior: smooth;
}
</style>
