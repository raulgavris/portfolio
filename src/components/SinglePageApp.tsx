import { useRef } from 'react'
import HomeSection from '@/components/Sections/HomeSection'
import AboutSection from '@/components/Sections/AboutSection'
import PortfolioSection from '@/components/Sections/PortfolioSection'
import ContactSection from '@/components/Sections/ContactSection'
import useScrollSpy from '@/lib/hooks/useScrollSpy'
import TimelineNavigation from './TimelineNavigation'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const SinglePageApp: React.FC = () => {
  const homeRef = useRef<SectionElement>(null)
  const aboutRef = useRef<SectionElement>(null)
  const portfolioRef = useRef<SectionElement>(null)
  const contactRef = useRef<SectionElement>(null)

  const activeSection = useScrollSpy([
    homeRef,
    aboutRef,
    portfolioRef,
    contactRef,
  ])
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: string) => {
    const targetElement = document.getElementById(section.slice(1))
    if (targetElement && containerRef.current) {
      containerRef.current.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      id="scrollerContainer"
      className="h-screen overflow-y-scroll"
      ref={containerRef}
    >
      <TimelineNavigation
        activeSection={activeSection}
        onCircleClick={scrollToSection}
      />
      <HomeSection homeRef={homeRef} containerRef={containerRef} />
      <AboutSection aboutRef={aboutRef} containerRef={containerRef} />
      <PortfolioSection
        portfolioRef={portfolioRef}
        containerRef={containerRef}
      />
      <ContactSection contactRef={contactRef} containerRef={containerRef} />
    </div>
  )
}

export default SinglePageApp
