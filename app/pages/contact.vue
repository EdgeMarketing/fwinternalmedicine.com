<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

// Zod Documentation: https://zod.dev/?id=strings

const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string({
      required_error: 'Email is required',
    }).min(1, { message: 'Email is required' }).email({ message: 'Must be a valid email' }),
    name: zod.string({
      required_error: 'Name is required',
    }).min(1, { message: 'Name is required' }),
    phone: zod.string({
      required_error: 'Phone is required',
    }).min(14, { message: 'Valid phone # required' }),
    message: zod.string({
      required_error: 'Message is required',
    }).min(1, { message: 'Message is required' }),
  }),
)
</script>

<template>
  <Head>
    <Title>Contact Fort Worth Internal Medicine</Title>
    <Meta
      name="description"
      content="At Fort Worth Internal Medicine, we’ve created a family-like environment to make our office feel welcoming while providing exceptional medical care and top-tier concierge-level patient service."
    />
    <Link rel="canonical" href="https://fwinternalmedicine.com/contact/" />
    <Meta property="og:title" content="Contact Fort Worth Internal Medicine" />
    <Meta
      property="og:description"
      content="At Fort Worth Internal Medicine, we’ve created a family-like environment to make our office feel welcoming while providing exceptional medical care and top-tier concierge-level patient service."
    />
    <Meta property="og:url" content="https://fwinternalmedicine.com/contact/" />
    <Meta property="og:type" content="website" />
    <Meta property="og:image" content="https://fwinternalmedicine.com/images/building.jpg" />
  </Head>

  <titleSection
    page="Fort Worth Internal Medicine"
    headline="Contact Us"
  />

  <!-- MAIN CONTENT -->
  <section class="py-24 bg-white/95">
    <div class="container px-6 mx-auto">
      <div class="grid gap-16 lg:grid-cols-3">
        <!-- FORM COLUMN (2/3) -->
        <div class="lg:col-span-2">
          <p class="pb-12">
            Fort Worth Internal Medicine provides patient-centered primary care and internal medicine services for adults across Fort Worth and the surrounding communities. Whether you need to schedule an appointment, request follow-up care, ask a question about your medical treatment plan, or learn more about becoming a new patient, our team is here to help. We offer longer appointment times, comprehensive chronic-care support, and a warm, traditional office environment designed around your comfort. Contact our Fort Worth medical office today to speak directly with our staff and get the personalized care and attention you deserve.
          </p>

          <edge-form-fling
            v-slot="{ submitting }"
            form-fling-endpoint="https://formfling.com/s/KLm807Hz7BXhB8S08uuF-97LV8JaWIpvVRI87JoOP-pyqxxi"
            turnstile-site-secret="0x4AAAAAAAkuN8yTza7gftGX"
            :validation-schema="validationSchema"
            class="space-y-6"
            success-message="Thank you, we will be in touch soon."
            error-message="There was an error submitting the form."
            success-class="text-green-500"
            error-class="text-red-500"
          >
            <div class="grid gap-6 md:grid-cols-2">
              <!-- Name -->
              <div class="md:col-span-2">
                <label for="name" class="block mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brandBlue1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brandBlue1 focus:border-brandBlue1"
                  error-class="text-red-500"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brandBlue1">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brandBlue1 focus:border-brandBlue1"
                  error-class="text-red-500"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brandBlue1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brandBlue1 focus:border-brandBlue1"
                  error-class="text-red-500"
                />
              </div>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brandBlue1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Message..."
                class="w-full px-4 py-3 text-sm border border-gray-300 rounded-none resize-y focus:outline-none focus:ring-2 focus:ring-brandBlue1 focus:border-brandBlue1"
                error-class="text-red-500"
              />
            </div>

            <!-- Submit -->
            <div class="flex flex-col items-start gap-4 md:flex-row md:items-center">
              <button
                v-if="!submitting"
                type="submit"
                class="px-8 py-3 text-sm font-bold tracking-[0.25em] uppercase bg-brandBlue1 text-white hover:bg-brandBlue1/90 transition"
              >
                Send Message
              </button>

              <button
                v-else
                type="button"
                class="px-8 py-3 text-sm font-bold tracking-[0.25em] uppercase bg-brandBlue1 text-white opacity-70 cursor-not-allowed"
              >
                Sending...
              </button>
            </div>
          </edge-form-fling>
        </div>

        <!-- INFO COLUMN (1/3) -->
        <aside class="space-y-8">
          <div>
            <h3 class="mb-4 text-lg font-semibold text-brandBlue1">
              Contact Info
            </h3>

            <!-- Helena -->
            <div class="mb-6">
              <ul class="space-y-1 text-sm leading-relaxed text-brandBlue1">
                <li class="flex items-start gap-3">
                  <span class="mt-0.5">
                    <i class="fas fa-map-marker-alt" />
                  </span>
                  <span>
                    1000 9th Ave Ste C<br>
                    Fort Worth, TX 76104
                  </span>
                </li>
                <li class="flex items-center gap-3">
                  <span>
                    <i class="fa-solid fa-phone" />
                  </span>
                  <a href="tel:+18173869818" class="hover:underline">
                    (817) 332-3039
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
          </div>

          <hr class="border-gray-200">
        </aside>
      </div>
    </div>
  </section>
</template>