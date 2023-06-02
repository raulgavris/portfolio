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
    // dispatch(updateContainer(containerRef))
    dispatch(updateActive(activeSection))
  }, [dispatch, activeSection])

  useEffect(() => {
    const setupCursor = () => {
      const cursor: HTMLElement = document.querySelector('.cursor')
      const cursorinner: HTMLElement = document.querySelector('.cursor2')
      const mouseHover = document.querySelectorAll('.mousehover')

      document.addEventListener('mousemove', function (e) {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      })

      document.addEventListener('mousemove', function (e) {
        const x = e.clientX
        const y = e.clientY
        cursorinner.style.left = x + 'px'
        cursorinner.style.top = y + 'px'
      })

      document.addEventListener('mousedown', function () {
        cursor.classList.add('click')
        cursorinner.classList.add('cursorinnerhover')
      })

      document.addEventListener('mouseup', function () {
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
      })

      mouseHover.forEach((item) => {
        item.addEventListener('mouseover', () => {
          cursor.classList.add('hover')
        })
        item.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover')
        })
      })
    }
    setTimeout(() => {
      setupCursor()
    }, 500)
    const setup3DButtons = () => {
      document.querySelectorAll('.button-3d').forEach((button: HTMLElement) => {
        const bounding = button.getBoundingClientRect()

        button.addEventListener('mousemove', (e) => {
          const speed = 2
          const dy = (e.clientY - bounding.top - bounding.height / 2) / -1
          const dx = (e.clientX - bounding.left - bounding.width / 2) / 10
          button.style.setProperty('--rx', (dy * speed * 0.2).toString())
          button.style.setProperty('--ry', (dx * speed * 0.2).toString())
        })

        button.addEventListener('mouseleave', () => {
          button.style.setProperty('--rx', '0')
          button.style.setProperty('--ry', '0')
        })
      })
    }
    setTimeout(() => {
      setup3DButtons()
    }, 500)
  }, [dispatch])

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
