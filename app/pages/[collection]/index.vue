<script setup>
import { NuxtLink } from '#components'
import { useAsyncData } from '#imports'
import { useRoute } from 'vue-router'

const route = useRoute()
const { collection } = route.params

const { data: projects } = await useAsyncData(collection, () => {
  return queryCollection(collection).order('date', 'DESC').all()
})
</script>

<template>
  <Head>
    <Title>Edge Website - An awesome Edge website</Title>
    <Meta name="description" content="This is an Edge website template" />
    <Link rel="canonical" href="https://edgemarketingdesign.com/contact" />
  </Head>

  <titleSection
    page="Content"
    :headline="collection"
  />

  <div class="container flex flex-col items-center justify-center w-full max-w-6xl px-6 pt-10 pb-64 mx-auto">
    <div v-for="project in projects" :key="project._id" class="mb-12">
      <NuxtLink :to="`${project.path}`">
        {{ project.title }}
      </NuxtLink>
    </div>
  </div>
</template>
