<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

// Patient Portal (single source of truth)
const portal = {
  label: 'Patient Portal',
  href: 'https://pxpportal.nextgen.com/txhealthcare-24928/portal/#/user/login',
}

const isHome = computed(() => route.path === '/')
const navBg = computed(() => isHome.value ? 'bg-brandBlue1' : 'bg-white')
const logoSrc = computed(() => isHome.value ? '/images/logo-white.png' : '/images/logo.png')
const textColor = computed(() => isHome.value ? 'text-white' : 'text-brandBlue1')

// Button styles adapt by page
const portalBtnClasses = computed(() =>
  isHome.value
    ? 'bg-white text-brandBlue1 hover:bg-white/90'
    : 'bg-brandBlue1 text-white hover:bg-brandBlue1/90',
)

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
          <img :src="logoSrc" alt="Fort Worth Internal Medicine" class="w-full h-auto">
        </NuxtLink>

        <!-- RIGHT SIDE (desktop links + portal button) -->
        <div class="items-center hidden gap-8 md:flex">
          <ul class="flex space-x-[30px] font-semibold tracking-widest">
            <li v-for="item in navItems" :key="item.to">
              <NuxtLink :to="item.to" class="nav-item">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Desktop Patient Portal button (far right) -->
          <a
            :href="portal.href"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-widest uppercase transition rounded-full"
            :class="portalBtnClasses"
          >
            {{ portal.label }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden focus:outline-none" aria-label="Toggle menu" @click="toggleMenu">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Patient Portal button BELOW the nav bar -->
    <div :class="navBg" class="px-6 pb-5 md:hidden md:px-12">
      <div class="container mx-auto">
        <a
          :href="portal.href"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold tracking-widest uppercase transition rounded-full"
          :class="portalBtnClasses"
        >
          {{ portal.label }}
        </a>
      </div>
    </div>

    <!-- Mobile Menu (slide) -->
    <transition name="slide">
      <div
        v-if="menuOpen"
        class="fixed inset-0 flex flex-col items-center justify-center px-20 py-6 text-center bg-brandBlue1 z-[9999] w-full h-full"
      >
        <button class="absolute text-4xl top-6 right-6 text-brandBlue2" aria-label="Close menu" @click="toggleMenu">
          ×
        </button>

        <NuxtLink to="/" @click="closeMenu">
          <img src="/images/logo-white.png" alt="Fort Worth Internal Medicine" class="mb-4 w-50">
        </NuxtLink>

        <ul class="w-full mt-8">
          <li
            v-for="item in navItems"
            :key="`${item.to}-mobile`"
            class="border-t border-brandBlue2 last:border-b"
          >
            <NuxtLink
              :to="item.to"
              class="block py-4 text-lg tracking-widest text-white"
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
.slide-leave-active { transition: transform .3s ease-in-out; }
.slide-enter-from,
.slide-leave-to { transform: translateX(100%); }

.nav-item { position: relative; transition: color .3s ease-in-out; }
.nav-item:hover { color: #A2A8AE; }
.nav-item.router-link-active { color: #A2A8AE; font-weight: bold; }
</style>