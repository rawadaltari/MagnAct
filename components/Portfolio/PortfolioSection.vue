<script setup>
const portfolioProjects = [
  {
    id: "project1",
    name: "Roomyco",
    description:
      "Mobile application to find roommate and room in emirates and post an ads to list your place.",
    type: "Website & Mobile App Development Projects",
    image: "/img/Project3.png",
    links: [
      { icon: "github", text: "Roomyco" },
      { icon: "facebook", text: "Roomyco" },
      { icon: "union", text: "Roomyco" },
    ],
    featured: true,
  },
  { id: "project2", image: "public/img/Project1.png", featured: false },
  { id: "project3", image: "/img/Project2.png", featured: false },
  { id: "project4", image: "/img/Project3.png", featured: false },
  { id: "project5", image: "/img/Project4.png", featured: false },
]

const handleNext = () => {
  positionIndexes.value = positionIndexes.value.map(
    (prevIndex) => (prevIndex + 1) % 5
  )
}

const handleBack = () => {
  positionIndexes.value = positionIndexes.value.map(
    (prevIndex) => (prevIndex + 4) % 5
  )
}

const featuredProject = portfolioProjects.find((p) => p.featured)
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full bg-[#0b0c0d] relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute w-full h-full top-0 left-0 z-0">
      <div class="absolute w-full h-full bg-gradient-to-br from-[#1c1e21] to-[#0b0c0d]">
        <img class="absolute w-full h-full object-cover" src="img/Dot grid.svg" alt="Dot grid" />
      </div>

      <!-- Purple Blurs -->
      <div class="absolute w-[679px] h-[680px] top-[138px] left-[50%] -translate-x-1/2 rotate-[140.56deg] z-0">
        <div class="w-[551px] h-[527px] top-[63px] left-[89px] bg-[#8d55a3] rounded-[275.36px/263.57px] rotate-[-20.36deg] absolute blur-[114.05px]" />
      </div>
      <div class="w-[238px] h-[248px] top-[223px] left-[75%] rounded-[118.85px/123.99px] rotate-[140.68deg] bg-gradient-to-tr from-[#8d55a3] to-[#35203d] absolute blur-[114.05px]" />
      <div class="w-[238px] h-[248px] top-[539px] left-[25%] rounded-[118.85px/123.99px] rotate-[140.68deg] bg-gradient-to-tr from-[#8d55a3] to-[#35203d] absolute blur-[114.05px]" />
    </div>

    <!-- Title -->
    <div class="z-10 mt-20">
      <h1 class="text-white text-5xl font-bold text-center">Portfolio</h1>
    </div>

    <!-- Featured Project -->
    <div class="relative w-full max-w-[600px] h-auto z-10 mt-16 px-4 md:px-0">
      <div
        class="w-full h-full rounded-[23px] overflow-hidden border border-[#464646e6] shadow-lg bg-cover bg-center relative"
        :style="`background-image: url(${featuredProject.image})`"
      >
        <div class="w-full md:h-[177px] bg-[#424242f2] p-4 md:p-5 backdrop-blur-sm flex flex-col md:flex-row items-start gap-4">
          <div class="text-white space-y-2">
            <h3 class="text-2xl font-semibold">{{ featuredProject.name }}</h3>
            <h4 class="text-lg">{{ featuredProject.type }}</h4>
            <p class="text-sm text-[#d1d1d1]">{{ featuredProject.description }}</p>
            <div class="flex flex-wrap gap-4 mt-2">
              <div
                v-for="link in featuredProject.links"
                :key="link.icon"
                class="flex items-center gap-1 text-[#d1d1d1]"
              >
                <img v-if="link.icon === 'union'" src="img/Union.svg" class="w-4 h-4" alt="icon" />
                <Icon v-else :name="link.icon" class="w-4 h-4" />
                <span>{{ link.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Small Projects - Hidden on Mobile -->
      <div class="absolute inset-0 pointer-events-none hidden md:block">
        <div class="absolute left-[-15%] top-[25%] transform -translate-x-1/2 w-[200px] h-80 rounded-[23px] border border-[#464646e6] shadow-lg bg-cover bg-center pointer-events-auto"
             style="background-image: linear-gradient(270deg, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(img/Project2.png)"></div>

        <div class="absolute right-[-15%] top-[25%] transform translate-x-1/2 w-[200px] h-80 rounded-[23px] border border-[#464646e6] shadow-lg bg-cover bg-center pointer-events-auto"
             style="background-image: linear-gradient(269deg, rgba(0,0,0,0), rgba(0,0,0,0.8)), url(img/Project3.png)"></div>

        <div class="absolute left-[-30%] bottom-[-80px] transform -translate-x-1/2 w-[150px] h-60 rounded-[23px] border border-[#464646e6] shadow-lg bg-cover bg-center pointer-events-auto"
             style="background-image: linear-gradient(270deg, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(img/Project4.png)"></div>

        <div class="absolute right-[-30%] bottom-[-80px] transform translate-x-1/2 w-[150px] h-60 rounded-[23px] border border-[#464646e6] shadow-lg bg-cover bg-center pointer-events-auto"
             style="background-image: linear-gradient(269deg, rgba(0,0,0,0), rgba(0,0,0,0.8)), url(img/Project5.png)"></div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="w-full max-w-[325px] h-[69px] mt-14 bg-[#424242cc] border border-white rounded-[20px] flex items-center justify-between px-3 backdrop-blur-sm z-10 text-center">
      <button class="w-9 h-9 rounded-full bg-[#d9d9d9cc] shadow-md flex items-center justify-center">
        <Icon name="lucide:arrow-left" class="w-4 h-4" />
      </button>
      <span class="text-white text-sm md:text-xl font-semibold">{{ featuredProject.name }}</span>
      <button class="w-9 h-9 rounded-full bg-[#d9d9d9cc] shadow-md flex items-center justify-center">
        <Icon name="lucide:arrow-right" class="w-4 h-4" />
      </button>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex flex-row gap-3 mt-10 md:mt-[400px]">
      <button class="text-white bg-indigo-400 rounded-md py-2 px-4" @click="handleBack">
        Back
      </button>
      <button class="text-white bg-indigo-400 rounded-md py-2 px-4" @click="handleNext">
        Next
      </button>
    </div>

    <!-- Decorative Elements -->
    <img class="absolute w-[300px] md:w-[537px] h-[437px] bottom-0 left-0 z-0" src="img/elements 1.png" alt="Decorative Element" />
    <img class="absolute w-[300px] md:w-[537px] h-[437px] bottom-0 right-0 z-0" src="img/elements 2.png" alt="Decorative Element" />
  </div>
</template>
