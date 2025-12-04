export default defineNuxtPlugin((nuxtApp) => {
  if (process.server)
    return

  let observer

  const initObserver = () => {
    // clean up any previous observer
    if (observer)
      observer.disconnect()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
          else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      {
        threshold: 0.2,
      },
    )

    // attach to all elements that should animate
    document.querySelectorAll('.js-anim').forEach((el) => {
      observer.observe(el)
    })
  }

  // run after each page render on the client, including first load
  nuxtApp.hook('page:finish', () => {
    window.requestAnimationFrame(initObserver)
  })
})