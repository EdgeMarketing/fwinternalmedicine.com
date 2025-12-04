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
            <li class="flex items-start gap-3">
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
              <a href="tel:+18173869818" class="hover:underline">
                (817) 386-9818
              </a>
            </li>
          </ul>
        </div>

        <!-- Center logo + blurb -->
        <div class="flex flex-col items-start text-left md:items-center md:text-center">
          <div class="flex items-center gap-4 mb-4">
            <img src="/images/logo-white.png" alt="Fort Worth Internal Medicine" class="w-auto h-24">
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
              <NuxtLink to="#" target="_blank" class="hover:underline">
                Patient Portal
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" target="_blank" class="hover:underline">
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
