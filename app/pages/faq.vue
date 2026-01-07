<script setup>
import { ref } from 'vue'

const openIndex = ref(0) // start with first item open, or set to -1 for none

const faqs = [
  {
    q: 'What are your office hours?',
    a: `
      <p><strong>Monday through Thursday:</strong> 8:00am to 4:30pm</p>
      <p><strong>Lunch:</strong> 12:00pm to 1:30pm</p>
      <p><strong>Friday:</strong> 8:00am to 12:00pm</p>
    `,
  },
  {
    q: 'What are your phlebotomy (blood draw) hours?',
    a: `
      <p><strong>Thursday:</strong> 8:30am to 4:30pm</p>
      <p><strong>Lunch:</strong> 12:00pm to 1:30pm</p>
    `,
  },
  {
    q: 'How do prescription refill requests work?',
    a: `
      <p>To help us process prescription refills as efficiently as possible, we kindly ask that you check with your pharmacy first, as many refills can be requested directly through them.</p>
      <p>Prescription refill requests are reviewed and completed during regular business hours and may take up to <strong>2–3 business days</strong> to process. We encourage patients to request refills before running out of medication to avoid delays.</p>
      <p>If your pharmacy is unable to assist or has additional questions, they will contact our office directly.</p>
    `,
  },
  {
    q: 'Do I need to complete electronic registration every year?',
    a: `
      <p>To help us provide safe, accurate, and efficient care, we ask all patients to complete electronic registration once each year. This allows us to confirm important information such as contact details, insurance coverage, medical history, and consent forms.</p>
      <p>Electronic registration helps reduce check-in time and ensures your care team has the most up-to-date information. If your information has not changed, the process is usually quick and easy to complete.</p>
      <p>Our staff is always happy to help if you have questions or need assistance with registration. If you cannot complete the registration prior to your appointment, we ask that you arrive at least <strong>15 minutes</strong> prior to your appointment and we will be happy to assist you.</p>
      <p>Thank you for your cooperation and for partnering with us in your care.</p>
    `,
  },
  {
    q: 'When are patient portal messages reviewed?',
    a: `
      <p>Our patient portal is a convenient way to communicate with our office, and we’re happy to review and respond to messages during regular business hours.</p>
      <p>Messages sent through the portal are not monitored outside of office hours, including evenings, weekends, and holidays. We do our best to respond as promptly as possible during the next business day.</p>
      <p>If you have an urgent or time-sensitive medical concern, please contact our office by phone during business hours or seek appropriate urgent or emergency care.</p>
      <p>Thank you for your understanding and for helping us provide thoughtful, timely care to all of our patients.</p>
    `,
  },
  {
    q: 'Can you complete forms for me?',
    a: `
      <p>We are happy to assist with completing medical forms and documents when requested. Because these forms often require a careful review of your medical record and dedicated provider or staff time, a form completion fee may apply.</p>
      <p>Fees vary depending on the type and length of the document and are not typically covered by insurance. Our team will let you know of any applicable fee before the form is completed.</p>
      <p>We appreciate your understanding and thank you for respecting the time and care that goes into ensuring your documents are completed accurately and thoughtfully.</p>
    `,
  },
  {
    q: 'How long do prior authorizations for medications take?',
    a: `
      <p>We understand how important it is to start your medications as quickly and smoothly as possible. Some insurance plans require a prior authorization before certain medications can be approved and covered.</p>
      <p>While our office is happy to assist with this process, prior authorizations are reviewed and handled during regular business hours and may take several days to complete, depending on your insurance company. Approval decisions are ultimately made by your insurer, and timelines can vary.</p>
      <p>We kindly ask that patients allow adequate time for this process and ensure we have current insurance information on file. We will notify you as soon as we receive an update from your insurance plan.</p>
      <p>If you have questions about medication costs or coverage, your pharmacy or insurance company may also be able to provide additional information.</p>
      <p>Thank you for your patience and understanding as we work to support your care.</p>
    `,
  },
  {
    q: 'What is your inclement weather policy?',
    a: `
      <p>This office follows the Fort Worth ISD inclement weather policy. If FWISD is closed due to inclement weather, this office will be closed.</p>
      <p>Once the office reopens, we will call to reschedule any missed appointments.</p>
    `,
  },
  {
    q: 'What is your no-show and late cancellation policy?',
    a: `
      <p>We truly value your time and are grateful you choose our office for your care. To provide the best possible service to all of our patients, we ask for your help with keeping scheduled appointments.</p>
      <p>If you are unable to attend your appointment, please let us know at least <strong>24 hours</strong> in advance so we can offer that time to another patient who may be waiting to be seen.</p>
      <p>Appointments that are missed without notice, or canceled with less than 24 hours’ notice, may be considered a no-show. A no-show or late cancellation fee may be applied. If this becomes a repeat issue, future scheduling may be limited.</p>
      <p>We understand that unexpected situations and emergencies happen. If something comes up, please reach out to us as soon as possible, our team is always happy to work with you when we can.</p>
      <p>Thank you for your understanding and for helping us provide timely, compassionate care to all of our patients.</p>
    `,
  },
]

const toggle = (idx) => {
  openIndex.value = openIndex.value === idx ? -1 : idx
}
</script>

<template>
  <Head>
    <Title>FAQ | Fort Worth Internal Medicine</Title>
    <Meta
      name="description"
      content="Frequently asked questions about Fort Worth Internal Medicine, including office hours, prescriptions, portal messaging, registration, forms, and policies."
    />
    <Link rel="canonical" href="https://fwininternalmedicine.com/faq/" />
  </Head>

  <titleSection
    page="Fort Worth Internal Medicine"
    headline="Frequently Asked Questions"
  />

  <section class="section-wrapper">
    <div class="container px-6 mx-auto lg:px-12">
      <div class="max-w-3xl space-y-3 js-anim anim">
        <p class="super-head">
          PATIENT INFORMATION
        </p>
        <h1 class="main-head">
          Office hours, policies, and what to expect
        </h1>
        <p class="section-detail">
          Below are quick answers to common questions about scheduling, refills, portal messages, and office policies.
        </p>
      </div>

      <div class="grid gap-10 mt-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        <!-- FAQ accordion -->
        <div class="space-y-4 js-anim anim anim-delay-1">
          <div
            v-for="(item, idx) in faqs"
            :key="idx"
            class="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-3xl"
          >
            <button
              type="button"
              class="flex items-center justify-between w-full gap-6 px-6 py-5 text-left"
              @click="toggle(idx)"
            >
              <span class="text-base font-semibold text-brandBlue1">
                {{ item.q }}
              </span>

              <span
                class="flex items-center justify-center flex-none w-10 h-10 rounded-2xl bg-brandBlue1/10 ring-1 ring-brandBlue1/15"
                :class="openIndex === idx ? 'text-brandBlue1' : 'text-brandBlue1/70'"
                aria-hidden="true"
              >
                <svg
                  v-if="openIndex !== idx"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7H5" />
                </svg>

                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5" />
                </svg>
              </span>
            </button>

            <div
              class="px-6 pb-6 text-sm leading-relaxed text-brandBlue1/90"
              :class="openIndex === idx ? 'block' : 'hidden'"
            >
              <div class="space-y-3 prose prose-p:my-0 prose-strong:text-brandBlue1 max-w-none" v-html="item.a" />
            </div>
          </div>
        </div>

        <!-- Right rail card -->
        <aside class="space-y-6 js-anim anim anim-delay-2">
          <div class="p-8 text-white shadow-xl rounded-3xl bg-brandBlue2">
            <h2 class="text-xl font-semibold">
              Need help fast?
            </h2>
            <p class="mt-3 text-white/90">
              For urgent or time-sensitive concerns, please call the office during business hours.
            </p>

            <div class="mt-6 space-y-3 text-sm">
              <div class="flex items-start gap-3">
                <span class="mt-0.5">
                  <i class="fa-solid fa-phone" />
                </span>
                <a href="tel:+18173323039" class="font-semibold hover:underline">
                  (817) 332-3039
                </a>
              </div>

              <div class="flex items-start gap-3">
                <span class="mt-0.5">
                  <i class="fa-solid fa-location-dot" />
                </span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1000+9th+Ave+Fort+Worth+TX+76104"
                  target="_blank"
                  rel="noopener"
                  class="hover:underline"
                >
                  1000 9th Ave<br>Fort Worth, TX 76104
                </a>
              </div>
            </div>

            <NuxtLink
              to="/contact"
              class="inline-flex items-center mt-6 underline underline-offset-4 hover:opacity-90"
            >
              Contact Us
              <i class="ml-2 fa-solid fa-arrow-right" />
            </NuxtLink>
          </div>

          <div class="p-8 bg-white border border-gray-200 shadow-sm rounded-3xl">
            <p class="super-head">
              QUICK TIP
            </p>
            <h3 class="mt-2 text-lg font-semibold text-brandBlue1">
              Refill requests
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-brandBlue1/80">
              Start with your pharmacy first when possible, and request refills before you run out to avoid delays.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>