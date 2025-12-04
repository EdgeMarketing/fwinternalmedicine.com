<script setup>
import { computed } from 'vue'
import staffDirectory from '~/data/team.js'

const props = defineProps({
  slug: {
    type: String,
    required: false,
    default: null,
  },
  team: {
    type: String,
    required: false,
    default: null,
  },
})

/**
 * Normalize staffDirectory into an array:
 * [{ slug, ...data }]
 */
const allStaff = computed(() =>
  Object.entries(staffDirectory)
    .filter(([, value]) => !!value)
    .map(([key, value]) => ({
      slug: value.slug ?? key,
      ...value,
    })),
)

const staffList = computed(() => {
  // 1. If a slug is provided, return that one
  if (props.slug) {
    const found = allStaff.value.find(person => person.slug === props.slug)
    return found ? [found] : []
  }

  // 2. If a team is provided, filter by team
  if (props.team) {
    return allStaff.value.filter(person => person.team === props.team)
  }

  // 3. Default: return everything
  return allStaff.value
})
</script>

<template>
  <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    <NuxtLink
      v-for="person in staffList"
      :key="person.slug"
      :to="`/team/${person.slug}`"
      class="relative block mb-10 group"
    >
      <!-- Photo -->
      <div class="relative">
        <img
          :src="person.image"
          :alt="person.name"
          class="object-cover w-full rounded-3xl h-96"
        >
      </div>

      <!-- Overlapping info card -->
      <div class="relative pb-6">
        <div
          class="absolute left-0 flex items-center justify-between px-6 py-4 bg-white shadow-md right-12 -top-8 rounded-3xl"
        >
          <div>
            <p class="text-xl font-semibold">
              {{ person.name }}
            </p>
            <p
              v-if="person.title"
              class="mt-1 text-xs tracking-[0.25em] uppercase text-brandBlue2"
            >
              {{ person.title }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>