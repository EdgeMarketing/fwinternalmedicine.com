<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  ;(function (d, t, g, k) {
    const ph = d.createElement(t)
    const s = d.getElementsByTagName(t)[0]
    let token = new URLSearchParams(window.location.search).get(k)

    if (token) {
      localStorage.setItem(k, token)
    }

    token = localStorage.getItem(k)

    ph.type = 'text/javascript'
    ph.async = true
    ph.defer = true
    ph.charset = 'UTF-8'
    ph.src = `${g}&v=${new Date().getTime()}`

    if (token) {
      ph.src += `&${k}=${token}`
    }

    s.parentNode.insertBefore(ph, s)
  })(document, 'script', '//huddle.edgemarketingdesign.com/?p=1680&ph_apikey=71b7de96374ac9687ff240b86bfea34c', 'ph_access_token')
})
</script>

<template>
  <footer class="relative pt-16 pb-10 text-white bg-brandBlue1">
    <div class="container px-6 mx-auto">
      <!-- Top row: 3 columns -->
      <div class="grid gap-12 md:grid-cols-[1.2fr_1fr_1.2fr] items-start">
        <!-- Contact column -->
        <div>
          <h3 class="mb-3 text-lg font-bold tracking-widest uppercase text-brandBlue2">
            Contact Us
          </h3>

          <ul class="space-y-1 text-sm leading-relaxed">
            <li class="flex items-start gap-4">
              <span class="mt-0.5">
                <i class="fas fa-map-marker-alt" />
              </span>
              <span>
                654 St Louis Ave<br>
                Fort Worth, TX 76104
              </span>
            </li>
            <li class="flex items-center gap-3">
              <span>
                <i class="fa-solid fa-phone" />
              </span>
              <a href="tel:+18173869818" class="hover:underline">(817) 386-9818
              </a>
            </li>
            <li class="flex items-center gap-3">
              <span>
                <i class="fa-solid fa-envelope" />
              </span>
              <a href="mailto:info@fwinternalmedicine.com" class="hover:underline">
                info@fwinternalmedicine.com
              </a>
            </li>
          </ul>
        </div>

        <!-- Center logo + blurb -->
        <div class="flex flex-col items-start text-left md:items-center md:text-center">
          <div class="flex items-center gap-4 mb-4">
            <a href="/"><img src="/images/logo-white.png" alt="Fort Worth Internal Medicine" class="w-auto h-24"></a>
          </div>

          <p class="max-w-lg text-sm leading-relaxed text-white">
            At Fort Worth Internal Medicine, we’ve created a family-like environment to make our office feel welcoming while providing exceptional medical care and top-tier concierge-level patient service.
          </p>
        </div>

        <!-- Links column -->
        <div class="text-left md:text-right">
          <h3 class="mb-3 text-lg font-bold tracking-widest uppercase text-brandBlue2">
            Links
          </h3>

          <ul class="space-y-3 text-sm">
            <li>
              <NuxtLink to="https://pxpportal.nextgen.com/txhealthcare-24928/portal/#/user/login" target="_blank" class="hover:underline">
                Patient Portal
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" target="_blank" class="hover:underline">
                Contact Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/careers" class="hover:underline">
                Careers
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="py-6 mt-12 border-t border-gray-200">
        <div class="flex flex-col items-start gap-4 text-xs text-brandSilver2 md:flex-row md:items-center md:justify-between">
          <!-- Left copyright -->
          <div>
            © {{ new Date().getFullYear() }} Fort Worth Internal Medicine All rights reserved.
          </div>

          <!-- Right legal links -->
          <div class="flex items-center gap-4">
            <NuxtLink to="/terms" class="hover:underline">
              Privacy Policy
            </NuxtLink>
            <span class="w-px h-4 bg-gray-300" />
            <NuxtLink to="https://edgemarketingdesign.com" class="hover:underline">
              Website by Edge Marketing
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
