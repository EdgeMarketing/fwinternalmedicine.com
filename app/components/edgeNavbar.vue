<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Nav items once
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

// Detect home page
const isHome = computed(() => route.path === '/')

// Choose bg and logo based on page
const navBg = computed(() => isHome.value ? 'bg-brandBlue1' : 'bg-white')
const logoSrc = computed(() => isHome.value ? '/images/logo-white.png' : '/images/logo.png')
const textColor = computed(() => isHome.value ? 'text-white' : 'text-brandBlue1')

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.classList.toggle('overflow-hidden', menuOpen.value)
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

const handleResize = () => {
  if (window.innerWidth >= 1024)
    closeMenu()
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<template>
  <nav class="relative z-30 border-b border-brandBlue2" :class="textColor">
    <div class="relative px-6 md:px-12" :class="navBg">
      <div class="container mx-auto flex items-center justify-between h-[128px]">
        <!-- Logo -->
        <NuxtLink to="/" class="text-xl font-bold">
          <img :src="logoSrc" alt="Logo" class="w-full h-auto">
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button class="md:hidden focus:outline-none" @click="toggleMenu">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor">
            <path
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor">
            <path
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-[30px] font-semibold tracking-widest">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink :to="item.to" class="nav-item">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div
        v-if="menuOpen"
        class="fixed inset-0 flex flex-col items-center justify-center px-20 py-6 text-center bg-brandBlue1 z-[9999] w-full h-full"
      >
        <button class="absolute text-4xl top-6 right-6 text-brandBlue2" @click="toggleMenu">
          ×
        </button>

        <NuxtLink to="/" @click="closeMenu">
          <img :src="isHome ? '/images/logo-white.png' : '/images/logo-white.png'" alt="Logo" class="mb-4 w-50">
        </NuxtLink>

        <ul class="w-full mt-8">
          <li
            v-for="item in navItems"
            :key="`${item.to}-mobile`"
            class="border-t border-brandBlue2 last:border-b"
          >
            <NuxtLink
              :to="item.to"
              class="block py-4 text-lg tracking-widest"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform .3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.nav-item {
  position: relative;
  transition: color .3s ease-in-out;
}

.nav-item:hover {
  color: #A2A8AE;
}

.nav-item.router-link-active {
  color: #A2A8AE;
  font-weight: bold;
}
</style>