<script setup>
import { useAsyncData } from '#imports'
import { useRoute } from 'vue-router'

const route = useRoute()
const { collection, slug } = route.params

const { data: project } = await useAsyncData(`${collection}-${slug}`, () => {
  return queryCollection(collection).path(`/${collection}/${slug}`).first()
})
</script>

<template>
  <Head>
    <Title>Edge Website - An awesome Edge website</Title>
    <Meta name="description" content="This is an Edge website template" />
    <Link rel="canonical" href="https://edgemarketingdesign.com/contact" />
  </Head>

  <titleSection
    :page="collection"
    :headline="project.title"
  />

  <div class="container flex flex-col items-center justify-center w-full max-w-6xl px-6 pt-10 pb-64 mx-auto">
    <article class="max-w-4xl px-4  py-16 mx-auto">
      <ContentRenderer :value="project" />
    </article>
  </div>
</template>
