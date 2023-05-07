import { useEffect, useState, RefObject } from 'react'

const useScrollSpy = (sectionRefs: RefObject<SectionElement>[]) => {
  const [activeSection, setActiveSection] = useState<string | null>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newPath = entry.target.getAttribute('data-path')
            setActiveSection(newPath)
            history.replaceState({}, '', newPath)
          }
        })
      },
      {
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.25,
      },
    )

    sectionRefs.forEach((ref) => ref.current && observer.observe(ref.current))

    return () => {
      sectionRefs.forEach(
        (ref) => ref.current && observer.unobserve(ref.current),
      )
    }
  }, [sectionRefs])

  return activeSection
}

export default useScrollSpy
