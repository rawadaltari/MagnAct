
import { ref, computed } from "vue";

export function useTeamMembers() {
    const teamMembers = [
        {
          id: 1,
          name: "Ehsan Nosair",
          role: "Lead Software Engineer",
          avatar: "/img/memoji.png",
          teamImage: "/img/Man-In-Suit-PNG-Pic 1.png", 
          featured: true,
          description: "Senior Full Stack Developer with expertise...",
        },
        {
          id: 2,
          name: "Sama Alwawi",
          role: "Digital Marketing & Social Media Manager",
          avatar: "/img/Ellipse 1249.png",
          teamImage: "/img/Project4.png", 
          description: "Digital marketing expert with 5+ years experience...",
        },
        {
          id: 3,
          name: "Hala Kabalan",
          role: "Project Manager",
          avatar: "",
        },
        {
          id: 4,
          name: "Ammar Alrefaie",
          role: "Software Architect",
          avatar: "",
        },
        {
          id: 5,
          name: "Youssef Essa",
          role: "Full Stack Mobile Developer",
          avatar: "",
        },
        {
          id: 6,
          name: "Ghinwa AboSaeed",
          role: "Mobile Application Developer",
          avatar: "",
        },
        {
          id: 7,
          name: "Maya Laika",
          role: "Senior Frontend Developer with SEO Expertise",
          avatar: "",
        },
        {
          id: 8,
          name: "Raneem Doghouz",
          role: "Creative UI/UX Designer",
          avatar: "",
        },
      ];


  const carousel = ref(null);
  const activeMember = ref(1);

  const activeMemberData = computed(() => {
    return (
      teamMembers.find((member) => member.id === activeMember.value) ||
      teamMembers[0]
    );
  });

  const setActiveMember = (id) => {
    activeMember.value = id;
    scrollToMember(id);
  };

  const scrollToMember = (id) => {
    const index = teamMembers.findIndex((m) => m.id === id);
    if (carousel.value && index >= 0) {
      const memberWidth = 164;
      const gap = 16;
      const scrollPosition = index * (memberWidth + gap);
      carousel.value.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    const currentIndex = teamMembers.findIndex(
      (m) => m.id === activeMember.value
    );
    const prevIndex =
      (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    activeMember.value = teamMembers[prevIndex].id;
    scrollToMember(activeMember.value);
  };

  const nextSlide = () => {
    const currentIndex = teamMembers.findIndex(
      (m) => m.id === activeMember.value
    );
    const nextIndex = (currentIndex + 1) % teamMembers.length;
    activeMember.value = teamMembers[nextIndex].id;
    scrollToMember(activeMember.value);
  };

  const handleScroll = () => {
    if (carousel.value) {
      const scrollPosition = carousel.value.scrollLeft;
      const memberWidth = 164;
      const gap = 16;
      const activeIndex = Math.round(scrollPosition / (memberWidth + gap));
      if (activeIndex >= 0 && activeIndex < teamMembers.length) {
        activeMember.value = teamMembers[activeIndex].id;
      }
    }
  };

  return {
    teamMembers,
    carousel,
    activeMember,
    activeMemberData,
    setActiveMember,
    scrollToMember,
    prevSlide,
    nextSlide,
    handleScroll,
  };
}
