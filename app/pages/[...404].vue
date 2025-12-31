<script setup>
throw createError({
  statusCode: 404,
  statusMessage: 'Page not found',
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

    <a href="/" class="px-6 py-2 mt-2 text-white transition-colors bg-brandBlue2 hover:bg-opacity-80">
      Go Home
    </a>
  </div>
</template>
