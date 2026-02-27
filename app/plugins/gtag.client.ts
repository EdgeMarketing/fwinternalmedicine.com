declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const measurementId = 'G-JQJNC95107'

 // disables collection in local dev env
  if (import.meta.dev) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    // Keep GA queue shape identical to the official snippet.
    window.dataLayer.push(arguments as unknown as any[])
  }

  const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${scriptSrc}"]`)
  let didLoad = false

  if (!existingScript) {
    const script = document.createElement('script')
    script.async = true
    script.src = scriptSrc

    script.onload = () => {
      didLoad = true
    }

    script.onerror = () => {
      console.warn(`[GA] Failed to load gtag.js for ${measurementId}`)
    }

    document.head.appendChild(script)
  }
  else {
    // Existing script tag may already be loaded; suppress noisy diagnostics.
    didLoad = true
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: false,
    transport_type: 'beacon',
  })

  const router = useRouter()
  let lastPath = ''

  const sendPageView = (fullPath: string) => {
    if (!fullPath || fullPath === lastPath) {
      return
    }
    lastPath = fullPath

    window.gtag('event', 'page_view', {
      send_to: measurementId,
      page_location: window.location.href,
      page_path: fullPath,
      page_title: document.title,
    })
  }

  nextTick(() => sendPageView(router.currentRoute.value.fullPath))
  router.afterEach((to) => {
    nextTick(() => sendPageView(to.fullPath))
  })

  setTimeout(() => {
    if (!didLoad) {
      console.warn(
        `[GA] gtag.js did not finish loading after 5s. Events may be queued but never sent. Measurement ID: ${measurementId}`,
      )
    }
  }, 5000)
})
