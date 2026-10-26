<script setup>
useHead({
  title: 'Website Maintenance | Contact Our Office',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'Our website is temporarily unavailable. Please contact our office for appointments and assistance.' },
    { name: 'robots', content: 'noindex, nofollow' },
    { property: 'og:title', content: 'Website Maintenance | Contact Our Office' },
    { property: 'og:description', content: 'Please contact our office for appointments and assistance.' },
  ],
})
</script>

<template>
  <main class="maintenance">
    <div class="maintenance-card">
      <div class="intro">
        <img class="practice-icon" src="/images/logo-symbol.svg" alt="" width="46" height="96">
        <p class="eyebrow">Thank you for your patience</p>
        <h1>Our website is<br>taking a little break.</h1>
        <p class="intro-copy">
          Our website is temporarily unavailable. For appointments or questions,
          please contact our office directly.
        </p>
        <a class="call-button" href="tel:+18173323039">
          Call (817) 332-3039 <span aria-hidden="true">↗</span>
        </a>
      </div>

      <section class="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Get in touch</h2>
        <div class="contact-item">
          <h3>Phone &amp; fax</h3>
          <a href="tel:+18173323039">(817) 332-3039</a>
          <p class="secondary">Fax: (817) 332-6902</p>
        </div>
        <div class="contact-item">
          <h3>Visit our office</h3>
          <a href="https://www.google.com/maps/search/?api=1&amp;query=1000+9th+Ave+Ste+C+Fort+Worth+TX+76104" target="_blank" rel="noopener noreferrer">
            1000 9th Ave, Suite C<br>Fort Worth, TX 76104
          </a>
        </div>
        <div class="contact-item hours">
          <h3>Office hours</h3>
          <p>Monday–Thursday <span>8:00 am–4:30 pm</span></p>
          <p>Friday <span>8:00 am–noon</span></p>
          <p class="secondary lunch">Lunch Monday–Thursday: 12:00–1:30 pm</p>
        </div>
      </section>
    </div>
    <p class="maintenance-note">For appointments and assistance, we’re just a phone call away.</p>
  </main>
</template>

<style scoped>
.maintenance {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 28px 32px;
  background: radial-gradient(ellipse at top left, #dcebf0 0, transparent 55%), #f2f5f6;
  color: #124671;
  font-family: 'Outfit', sans-serif;
}
.maintenance-card {
  width: 100%;
  max-width: 1040px;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  overflow: hidden;
  border: 1px solid #dce5e9;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 24px 80px #1246710a;
}
.intro { padding: 64px 56px; }
.practice-icon { display: block; width: auto; height: 96px; margin-bottom: 36px; }
.eyebrow { margin: 0 0 16px; color: #0077a4; font-size: 12px; font-weight: 600; letter-spacing: .15em; text-transform: uppercase; }
h1 { margin: 0; font-size: clamp(34px, 4vw, 48px); line-height: 1.12; font-weight: 500; letter-spacing: -.035em; }
.intro-copy { margin: 24px 0 30px; max-width: 340px; font-size: 17px; line-height: 1.7; color: #536878; }
.call-button { display: inline-flex; gap: 26px; align-items: center; padding: 16px 22px; border-radius: 7px; background: #124671; color: #fff; font-weight: 500; }
.call-button:hover { background: #0077a4; }
.call-button span { font-size: 22px; line-height: 1; }
.contact { padding: 58px 44px; background: #f8fafb; border-left: 1px solid #e5edf0; }
h2 { margin: 0 0 30px; font-size: 25px; font-weight: 500; letter-spacing: -.02em; }
.contact-item + .contact-item { margin-top: 24px; }
h3 { margin: 0 0 7px; color: #536878; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .13em; }
.contact-item a, .contact-item p { font-size: 15px; line-height: 1.65; }
.contact-item a:hover { text-decoration: underline; text-underline-offset: 4px; }
.contact-item p { margin: 0; }
.contact-item .secondary { color: #536878; font-size: 13px; }
.hours p:not(.lunch) { display: flex; justify-content: space-between; gap: 14px; }
.hours .lunch { margin-top: 7px; }
.maintenance-note { margin: 26px 0 0; color: #536878; font-size: 13px; text-align: center; }
a:focus-visible { outline: 3px solid #0077a4; outline-offset: 5px; border-radius: 3px; }
@media (max-width: 760px) {
  .maintenance { padding: 28px 18px; }
  .maintenance-card { max-width: 500px; grid-template-columns: 1fr; border-radius: 14px; }
  .intro { padding: 34px 28px 38px; }
  .practice-icon { margin-bottom: 28px; height: 80px; }
  .intro-copy { font-size: 16px; margin-top: 20px; }
  .contact { padding: 30px 28px; border-left: 0; border-top: 1px solid #e5edf0; }
  h2 { margin-bottom: 24px; }
  .maintenance-note { max-width: 280px; line-height: 1.6; }
}
</style>
