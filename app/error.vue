<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
})

const statusCode = computed(() => props.error?.statusCode || 500)
const isNotFound = computed(() => statusCode.value === 404)
</script>

<template>
  <edge-navbar />
  <Head>
    <Title>404 | Fort Worth Internal Medicine</Title>
    <Meta name="description" content="Page not found" />
    <Link rel="canonical" href="https://fwinternalmedicine.com/404/" />
  </Head>

  <template v-if="isNotFound">
    <titleSection
      page="404"
      headline="404 - Page Not Found"
    />
    <div class="min-h-[calc(100vh_-_586px)] w-full items-center justify-center flex flex-col">
      <h1 class="mb-4 text-6xl font-bold">
        404
      </h1>
      <p class="mb-2 text-xl">
        Page Not Found
      </p>
      <a href="/" class="px-6 py-2 mt-2 transition-colors bg-lblue text-dblue hover:bg-opacity-80">
        Go Home & Debug Later
      </a>
    </div>
  </template>
  <div v-else class="min-h-[calc(100vh_-_586px)] w-full items-center justify-center flex flex-col">
    <titleSection
      page="Error"
      headline="Something went wrong"
    />
    <h1 class="mb-4 text-6xl font-bold">
      {{ statusCode }}
    </h1>
    <p class="mb-2 text-xl">
      Unexpected Error
    </p>
    <p class="mb-6 text-gray-400 text-md">
      Please try again or head back home.
    </p>
    <a href="/" class="px-6 py-2 mt-2 transition-colors bg-lblue text-dblue hover:bg-opacity-80">
      Go Home
    </a>
  </div>
  <edge-footer />
</template>
