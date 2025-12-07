<template>
  <Head>
    <Title>Fort Worth Internal Medicine</Title>
    <Meta
      name="description"
      content="At Fort Worth Internal Medicine, we’ve created a family-like environment to make our office feel welcoming while providing exceptional medical care and top-tier concierge-level patient service."
    />
    <Link rel="canonical" href="https://fwinternalmedicine.com/" />
  </Head>

  <section
    class="relative pt-24 pb-16 overflow-hidden text-white bg-brandBlue1 md:pb-20 lg:pb-24"
  >
    <!-- white lower background so it cuts behind the image -->
    <div
      class="absolute inset-x-0 bottom-0 h-48 bg-white pointer-events-none md:h-64 lg:h-80"
    />

    <div class="container relative px-6 mx-auto lg:px-12">
      <!-- TOP ROW: HEADLINE + SUBTEXT -->
      <div
        class="grid items-center gap-6 pb-8 md:gap-8 md:pb-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
      >
        <h1
          class="hero-heading text-3xl font-light !leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl"
        >
          Superior
          <span class="font-bold">
            Medical Care
          </span>
          You Deserve and Expect
        </h1>

        <div class="max-w-sm text-sm hero-subcopy text-white/90 sm:text-base">
          When you visit your doctor’s office, you want personalized,
          compassionate, evidenced-based care in a friendly, traditional family
          office setting.
        </div>
      </div>

      <!-- BOTTOM ROW: BULLETS + CARD / IMAGE -->
      <div
        class="grid items-end gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
      >
        <!-- LEFT SIDE -->
        <div class="space-y-8 hero-left md:space-y-10">
          <ul class="space-y-3 text-sm hero-bullets sm:text-base">
            <li class="flex items-center gap-3">
              <span
                class="flex items-center justify-center mt-1 rounded-full h-7 w-7 bg-brandBlue2"
              >
                <span class="w-3 h-3 bg-white rounded-full" />
              </span>
              <span>Personalized, evidence-based care</span>
            </li>
            <li class="flex items-center gap-3">
              <span
                class="flex items-center justify-center mt-1 rounded-full h-7 w-7 bg-brandBlue2"
              >
                <span class="w-3 h-3 bg-white rounded-full" />
              </span>
              <span>Longer visits and unrushed appointments</span>
            </li>
            <li class="flex items-center gap-3">
              <span
                class="flex items-center justify-center mt-1 rounded-full h-7 w-7 bg-brandBlue2"
              >
                <span class="w-3 h-3 bg-white rounded-full" />
              </span>
              <span>Concierge-level patient service</span>
            </li>
          </ul>

          <!-- CTA with extra circle -->
          <div class="pb-2 hero-cta sm:pb-4">
            <NuxtLink to="/contact" class="inline-flex items-center">
              <span
                class="relative inline-flex items-center px-8 py-3 text-sm font-semibold tracking-wide rounded-full bg-brandBlue2 sm:text-base"
              >
                LEARN MORE
              </span>
              <span
                class="flex items-center justify-center w-12 h-12 -ml-2 rounded-full shadow-lg bg-brandBlue2"
              >
                <span class="flex items-center justify-center w-8 h-8 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </span>
            </NuxtLink>
          </div>

          <!-- CONTACT CARD -->
          <div
            class="max-w-md p-6 text-sm shadow-xl hero-card rounded-3xl bg-brandBlue2 sm:p-7 sm:text-base"
          >
            <h2 class="mb-3 text-lg font-semibold leading-snug sm:text-2xl">
              Your Care Starts With a Conversation
            </h2>

            <p class="mb-6 text-white/90">
              We’ll get you scheduled quickly and make sure you have the time
              you need to discuss every concern.
            </p>

            <div class="space-y-4">
              <!-- PHONE -->
              <div class="flex items-start gap-3">
                <span
                  class="flex items-center justify-center mt-1 rounded-full h-9 w-9 bg-white/10"
                >
                  <i class="fa-solid fa-phone" />
                </span>

                <div>
                  <p class="font-semibold text-white">
                    Phone Number:
                  </p>
                  <p>
                    <a href="tel:18173869818" class="text-white hover:opacity-80">
                      (817) 386-9818
                    </a>
                  </p>
                </div>
              </div>

              <!-- ADDRESS -->
              <div class="flex items-start gap-3">
                <span
                  class="flex items-center justify-center mt-1 rounded-full h-9 w-9 bg-white/10"
                >
                  <i class="fas fa-map-marker-alt" />
                </span>

                <div>
                  <p class="font-semibold">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=654+St+Louis+Ave+Fort+Worth+TX+76104"
                      target="_blank"
                      rel="noopener"
                      class="text-white hover:opacity-80"
                    >
                      654 St Louis Ave
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=654+St+Louis+Ave+Fort+Worth+TX+76104"
                      target="_blank"
                      rel="noopener"
                      class="text-white hover:opacity-80"
                    >
                      Fort Worth, TX 76104
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE IMAGE -->
        <div class="relative hero-image-wrapper">
          <div
            class="hero-image overflow-hidden rounded-3xl rounded-tl-[100px] bg-slate-200 shadow-xl relative w-full h-full"
          >
            <div class="relative w-full h-0 pb-[56.25%]">
              <iframe
                src="https://customer-wjh80wxi1grqfvvb.cloudflarestream.com/48df4ce20045b93ef7c1a8bd55c8ce0a/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-wjh80wxi1grqfvvb.cloudflarestream.com%2F48df4ce20045b93ef7c1a8bd55c8ce0a%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                loading="lazy"
                class="absolute inset-0 w-full h-full"
                style="border: none;"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowfullscreen="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-24">
    <div class="container px-6 mx-auto lg:px-12">
      <div class="section-heading-grid">
        <!-- LEFT: super head + heading -->
        <div class="pr-8 js-anim anim anim-delay-1">
          <p class="super-head">
            OVER 30 YEARS OF TRUSTED CARE
          </p>

          <h2 class="main-head">
            Exceptional Medicine Delivered With Time, Attention, and Respect
          </h2>
        </div>

        <!-- RIGHT: detail text -->
        <div class="js-anim anim anim-delay-2">
          <p class="section-detail">
            At Fort Worth Internal Medicine, we’ve created a family-like environment to make our office feel welcoming while providing exceptional medical care and top-tier concierge-level patient service.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container px-6 mx-auto lg:px-12">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <!-- LEFT: IMAGE -->
        <div class="js-anim anim anim-delay-1">
          <div class="overflow-hidden shadow-xl rounded-3xl rounded-tl-[100px] bg-slate-200">
            <img
              src="/images/reception.jpg"
              alt="Fort Worth Internal Medicine office"
              class="object-cover w-full h-full"
            >
          </div>
        </div>

        <!-- RIGHT: TEXT -->
        <div class="max-w-lg space-y-4 js-anim anim anim-delay-2 lg:space-y-6">
          <p>
            What makes our office unique is our availability and the time we dedicate to each patient. Your appointments are longer than most offices’, to give you enough time to discuss concerns, especially if they are complex. We take pride in being medical professionals who listen and take the time to get to know you. Our office staff is courteous, responsive and answers the phone directly when you call. We are a small, private office that prioritizes the individual’s needs and gets to know each patient personally.
          </p>

          <p>
            Our practice specializes in internal medicine, primary care, geriatrics, and preventive medicine for adults of all ages, using an evidence-based approach. We help patients with complex medical issues and multiple chronic conditions, as well as those with minor concerns.
          </p>
          <p>
            As the premier primary care Internal Medicine office in the Fort Worth, TX area for over 30 years, we have personal connections with all the hospitals in the area and most of the specialists you would see.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-24 section-wrapper bg-slate-50">
    <div class="container px-6 mx-auto space-y-12 lg:px-12">
      <!-- TOP: HEADLINE + IMAGE -->
      <div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <!-- TEXT SIDE -->
        <div class="space-y-3 js-anim anim anim-delay-1">
          <p class="super-head">
            OUR TEAM
          </p>
          <h2 class="main-head">
            Extensively experienced and highly trained medical practitioners
          </h2>
          <p class="section-detail">
            The team is led by Dr. Mark Ziats, a board-certified Internal Medicine physician, and Ashley Pittman, APRN, who has been practicing with Fort Worth Internal Medicine for over a decade.
          </p>
        </div>

        <!-- IMAGE SIDE -->
        <div class="js-anim anim anim-delay-2">
          <div class="overflow-hidden shadow-xl rounded-3xl bg-slate-200">
            <img
              src="/images/mark-home.jpg"
              alt="Fort Worth Internal Medicine team"
              class="object-cover w-full h-full"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container relative m-auto mt-6 2xl:mt-0">
      <div class="relative grid gap-8 lg:grid-cols-3 lg:items-end">
        <!-- BOX 1: PROVIDERS -->
        <div class="p-6 bg-white shadow-sm js-anim anim rounded-3xl lg:-translate-y-2">
          <!-- ICON + TITLE ROW -->
          <div class="flex items-center gap-4 mb-4">
            <div class="flex items-center justify-center h-14 w-14 shrink-0 rounded-2xl bg-brandBlue1/10 ring-1 ring-brandBlue1/20">
              <i class="text-2xl fa-solid fa-user-doctor text-brandBlue1" />
            </div>

            <h3 class="text-xl font-semibold leading-snug text-brandBlue1">
              Medical Providers
            </h3>
          </div>

          <p class="section-detail">
            Highly experienced and well-trained medical professionals provide the top-quality care you receive at Fort Worth Internal Medicine. Dr Ziats completed MD/PhD training at Baylor College of Medicine and the University of Cambridge (UK), and has extensive clinical experience in acute hospital care, post-acute care, and general outpatient internal medicine across various settings in the U.S. Ashley Pittman has extensive experience in geriatric medicine, value-based care, and has taken care of many of the patients in our practice for decades.
          </p>
        </div>

        <!-- BOX 2: STAFF & SUPPORT -->
        <div class="p-6 bg-white shadow-sm js-anim anim anim-delay-1 rounded-3xl lg:translate-y-0">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex items-center justify-center h-14 w-14 shrink-0 rounded-2xl bg-brandBlue1/10 ring-1 ring-brandBlue1/20">
              <i class="text-2xl fa-solid fa-users text-brandBlue1" />
            </div>

            <h3 class="text-xl font-semibold leading-snug text-brandBlue1">
              Support Staff & After-Hours Care
            </h3>
          </div>

          <p class="section-detail">
            Our office and support staff are also unmatched in experience, training, and the quality of care they provide. They work with you to address and resolve your issues promptly and pleasantly. For those with needs outside of our office hours, we offer various after-hours programs, including chronic care management with 24-hour nurse access for Medicare patients and other concierge options.
          </p>
        </div>

        <!-- BOX 3: OFFICE ENVIRONMENT -->
        <div class="p-6 bg-white shadow-sm js-anim anim anim-delay-2 rounded-3xl lg:translate-y-4">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex items-center justify-center h-14 w-14 shrink-0 rounded-2xl bg-brandBlue1/10 ring-1 ring-brandBlue1/20">
              <i class="text-2xl fa-solid fa-hospital text-brandBlue1" />
            </div>

            <h3 class="text-xl font-semibold leading-snug text-brandBlue1">
              Comfortable, Accessible Office
            </h3>
          </div>

          <p class="section-detail">
            You will find our office is traditional yet inviting, featuring a comfortable waiting area. Since we're on ground level, it's easily accessible with parking available right outside our front door.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Simple entrance animation on load */

@keyframes heroFadeUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-heading,
.hero-subcopy,
.hero-left,
.hero-card,
.hero-image {
  opacity: 0;
  transform: translateY(24px);
  animation: heroFadeUp 0.7s ease-out forwards;
}

/* Staggered delays */
.hero-heading {
  animation-delay: 0.1s;
}
.hero-subcopy {
  animation-delay: 0.2s;
}
.hero-left {
  animation-delay: 0.3s;
}
.hero-card {
  animation-delay: 0.4s;
}
.hero-image {
  animation-delay: 0.5s;
}
</style>