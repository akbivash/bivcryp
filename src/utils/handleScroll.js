
export const handleScroll = (props) => {
  const { setIsSidebarOpen, isSidebarOpen } = props

  const handleLinks = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeLinks = () => {
    setIsSidebarOpen(false)
  }

  function scrollToTop(e) {
    e.preventDefault()
    const id = e.target.getAttribute('href')
    const elem = document.getElementById(id)
    const pos = elem.offsetTop
    if (isSidebarOpen) {
      closeLinks()
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: pos - 60,
          behavior: 'smooth'
        })

      }, 500)
    } else {
      window.scrollTo({
        top: pos - 60,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  return {
    handleLinks, scrollToTop, closeLinks, isSidebarOpen
  }
}