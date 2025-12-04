<script setup>
onMounted(() => {
  console.log('Hello world.')
})
</script>

<template>
  <Head>
    <Title>404 | Fort Worth Internal Medicine</Title>
    <Meta
      name="description"
      content="At Fort Worth Internal Medicine, we’ve created a family-like environment to make our office feel welcoming while providing exceptional medical care and top-tier concierge-level patient service."
    />
    <Link rel="canonical" href="https://fwinternalmedicine.com/404/" />
  </Head>

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
    <p class="mb-6 text-gray-400 text-md">
      Looks like this page took an early return and never came back.<br>
      Maybe it hit a <code class="bg-gray-800 px-1 py-0.5 rounded">null pointer</code>... or just rage-quit the DOM.
    </p>
    <a href="/" class="px-6 py-2 mt-2 transition-colors bg-brandBlue2 text-brandBlue1 hover:bg-opacity-80">
      Go Home & Debug Later
    </a>
  </div>
</template>
