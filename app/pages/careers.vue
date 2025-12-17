<template>
  <Head>
    <Title>Careers | Fort Worth Internal Medicine</Title>
    <Meta
      name="description"
      content="We’re hiring a part-time Nurse Practitioner or Physician Assistant to provide internal medicine care for adults, including older adults with complex medical needs."
    />
    <Link rel="canonical" href="https://fwinternalmedicine.com/careers/" />
  </Head>

  <titleSection page="Fort Worth Internal Medicine" headline="Careers" />

  <section class="py-24 bg-white/95">
    <div class="container px-6 mx-auto">
      <div class="grid gap-16 lg:grid-cols-3">
        <!-- LEFT: JOB CONTENT (2/3) -->
        <div class="lg:col-span-2">
          <p class="pb-8">
            Fort Worth Internal Medicine is a traditional, patient-focused internal medicine practice serving adults in the Fort Worth area. Our visits are intentionally longer and our care is built around availability, responsiveness, and relationships.
          </p>

          <div class="p-8 border bg-slate-50 rounded-3xl border-slate-200">
            <p class="text-xs font-semibold tracking-[0.25em] uppercase text-brandSilver1">
              Current Opening
            </p>

            <h2 class="mt-3 text-2xl font-semibold text-brandBlue1">
              Part-Time Nurse Practitioner (NP) or Physician Assistant (PA)
            </h2>

            <div class="mt-6 space-y-4 text-brandBlue1">
              <p class="section-detail">
                We’re seeking a part-time NP or PA who is comfortable seeing adults, with a patient population that is largely age 65+ and often managing multiple medical conditions. The role includes both in-person visits and virtual visits, with a focus on attentive, thorough internal medicine care.
              </p>

              <div>
                <h3 class="text-sm font-semibold tracking-[0.2em] uppercase">
                  What you’ll do
                </h3>
                <ul class="mt-3 space-y-2 text-sm">
                  <li class="flex items-start gap-3">
                    <span class="mt-1.5 h-2 w-2 rounded-full bg-brandBlue1" />
                    <span>Provide internal medicine and primary care visits for adult patients, including complex and chronic conditions</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1.5 h-2 w-2 rounded-full bg-brandBlue1" />
                    <span>Conduct both in-person and virtual follow-up care</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1.5 h-2 w-2 rounded-full bg-brandBlue1" />
                    <span>Coordinate care with specialists and local healthcare partners when needed</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1.5 h-2 w-2 rounded-full bg-brandBlue1" />
                    <span>Support older adults with multiple medical problems through a thoughtful, evidence-based approach</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-sm font-semibold tracking-[0.2em] uppercase">
                  Preferred experience
                </h3>
                <ul class="mt-3 space-y-2 text-sm">
                  <li class="flex items-start gap-3">
                    <span class="mt-1.5 h-2 w-2 rounded-full bg-brandBlue1" />
                    <span>Internal medicine, primary care, and/or hospital medicine</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1.5 h-2 w-2 rounded-full bg-brandBlue1" />
                    <span>Comfort managing multiple chronic conditions in older adults</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1.5 h-2 w-2 rounded-full bg-brandBlue1" />
                    <span>Strong communication and a relationship-first care style</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: FORM (1/3) -->
        <aside class="lg:col-span-1">
          <div class="p-8 bg-white border shadow-sm border-slate-200 rounded-3xl">
            <h3 class="text-lg font-semibold text-brandBlue1">
              Apply for This Position
            </h3>
            <p class="mt-2 text-sm text-brandSilver1">
              Upload your resume and send a short note. We’ll follow up if there’s a fit.
            </p>

            <form
              id="careers_form"
              method="post"
              enctype="multipart/form-data"
              class="mt-8 space-y-6"
            >
              <!-- Name -->
              <div>
                <label for="name" class="block mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brandBlue1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brandBlue1 focus:border-brandBlue1"
                  required
                >
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brandBlue1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brandBlue1 focus:border-brandBlue1"
                >
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brandBlue1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brandBlue1 focus:border-brandBlue1"
                  required
                >
              </div>

              <!-- Resume Upload -->
              <div>
                <label for="resume" class="block mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brandBlue1">
                  Resume
                </label>

                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  class="w-full text-sm file:mr-4 file:px-4 file:py-3 file:border-0 file:rounded-none file:bg-brandBlue1 file:text-white hover:file:bg-brandBlue1/90 file:font-bold file:tracking-[0.15em] file:uppercase"
                  required
                >

                <p class="mt-2 text-xs text-brandSilver1">
                  PDF preferred. Accepted: .pdf, .doc, .docx
                </p>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-brandBlue1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="A quick note about your experience and availability."
                  class="w-full px-4 py-3 text-sm border border-gray-300 rounded-none resize-y focus:outline-none focus:ring-2 focus:ring-brandBlue1 focus:border-brandBlue1"
                  required
                />
              </div>

              <button
                type="submit"
                class="w-full px-8 py-3 text-sm font-bold tracking-[0.25em] uppercase bg-brandBlue1 text-white hover:bg-brandBlue1/90 transition"
              >
                Submit Application
              </button>

              <div id="alert" class="text-sm text-brandSilver1" />
            </form>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>