<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import staffDirectory from '~/data/team.js'

const route = useRoute()
const router = useRouter()

const staff = computed(() => {
  const entry = staffDirectory[route.params.slug]
  if (!entry) {
    router.push('/404')
    return null
  }
  return entry
})
</script>

<template>
  <div v-if="staff">
    <Head>
      <Title>
        {{ staff.name }} | Fort Worth Internal Medicine
      </Title>
      <Meta
        name="description"
        :content="`${staff.name}, ${staff.title}, part of the Golden Eagle team.`"
      />
      <Link
        rel="canonical"
        :href="`https://geconstruction.com/team/${staff.slug}/`"
      />
    </Head>

    <titleSection
      page="Fort Worth Internal Medicine"
      headline="Our Team"
    />

    <section class="max-w-6xl px-6 py-16 mx-auto">
      <div class="grid gap-12 lg:grid-cols-3">
        <!-- LEFT 1/3: card-style image + name, same as list card -->
        <div class="lg:col-span-1">
          <div class="relative mb-10">
            <!-- Photo -->
            <div class="relative">
              <img
                :src="staff.image"
                :alt="staff.name"
                class="object-cover w-full h-96 rounded-3xl"
              >

              <!-- Corner accent -->
              <div class="absolute top-4 right-4">
                <span class="block h-[3px] w-12 bg-brandGold" />
                <span class="block w-[3px] h-12 ml-auto bg-brandGold" />
              </div>
            </div>

            <!-- Overlapping info card (same format as card) -->
            <div class="relative pb-6">
              <div
                class="absolute left-0 flex items-center justify-between px-6 py-4 bg-white shadow-md rounded-3xl right-12 -top-8"
              >
                <div>
                  <p class="text-xl font-semibold ">
                    {{ staff.name }}
                  </p>
                  <p
                    v-if="staff.title"
                    class="mt-1 text-xs tracking-[0.25em] uppercase "
                  >
                    {{ staff.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Optional back link -->
          <NuxtLink
            to="/about"
            class="text-xs font-semibold tracking-[0.25em] uppercase hover:text-brandBlue1"
          >
            ← Back to Team
          </NuxtLink>
        </div>

        <!-- RIGHT 2/3: bio text -->
        <div class="lg:col-span-2">
          <!-- You can keep or drop this heading -->
          <h1 class="mb-6 text-3xl font-semibold text-brandBlue1">
            About {{ staff.name }}
          </h1>

          <div
            class="text-lg leading-relaxed text-brandBlue1"
            v-html="staff.bio"
          />
        </div>
      </div>
    </section>
  </div>
</template>