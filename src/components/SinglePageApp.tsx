import { useEffect, useRef } from 'react'
import HomeSection from '@/components/Sections/HomeSection'
import AboutSection from '@/components/Sections/AboutSection'
import PortfolioSection from '@/components/Sections/PortfolioSection'
import ContactSection from '@/components/Sections/ContactSection'
import useScrollSpy from '@/lib/hooks/useScrollSpy'
import TimelineNavigation from './TimelineNavigation'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import BlogSection from './Sections/BlogSection'
import { useDispatch } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'
import {
  updateAbout,
  updateActive,
  updateBlog,
  updateContact,
  updateContainer,
  updateHome,
  updatePortfolio,
} from '@/redux/store'

gsap.registerPlugin(ScrollTrigger)

const SinglePageApp: React.FC = () => {
  const dispatch = useDispatch()

  const homeRef = useRef<SectionElement>(null)
  const aboutRef = useRef<SectionElement>(null)
  const portfolioRef = useRef<SectionElement>(null)
  const blogRef = useRef<SectionElement>(null)
  const contactRef = useRef<SectionElement>(null)

  const activeSection = useScrollSpy([
    homeRef,
    aboutRef,
    portfolioRef,
    blogRef,
    contactRef,
  ])
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: string) => {
    const targetElement = document.getElementById(section.slice(1))
    if (targetElement && containerRef.current) {
      if (section.includes('home')) {
        containerRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      } else {
        containerRef.current.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        })
      }
    }
  }

  useEffect(() => {
    if (aboutRef && aboutRef.current) {
      const newAbout = cloneDeep(aboutRef)
      dispatch(updateAbout(newAbout))
    }
    if (blogRef && blogRef.current) {
      const newBlog = cloneDeep(blogRef)
      dispatch(updateBlog(newBlog))
    }
    if (contactRef && contactRef.current) {
      const newContact = cloneDeep(contactRef)
      dispatch(updateContact(newContact))
    }
    if (homeRef && homeRef.current) {
      const newHome = cloneDeep(homeRef)
      dispatch(updateHome(newHome))
    }
    if (portfolioRef && portfolioRef.current) {
      const newPortfolio = cloneDeep(portfolioRef)
      dispatch(updatePortfolio(newPortfolio))
    }
    if (containerRef && containerRef.current) {
      const newContainer = cloneDeep(containerRef)
      dispatch(updateContainer(newContainer))
    }
    dispatch(updateActive(activeSection))
  }, [dispatch, activeSection])

  return (
    <div
      id="scrollerContainer"
      className="h-screen overflow-y-scroll scrollbar-hide"
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
      <BlogSection blogRef={blogRef} containerRef={containerRef} />
      <ContactSection contactRef={contactRef} containerRef={containerRef} />
    </div>
  )
}

export default SinglePageApp
