export function scrollToElement(id: string): boolean {
  const target = document.getElementById(id)
  if (!target) return false

  const hash = `#${id}`
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash)
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" })
  return true
}
