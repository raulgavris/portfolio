import React, { RefObject, useEffect } from 'react'
import { SectionElement } from '@/lib/hooks/useScrollSpy'
import { useRouter } from 'next/router'

interface HomeSectionProps {
  containerRef: RefObject<HTMLDivElement>
  homeRef: RefObject<SectionElement>
}

const HomeSection = React.forwardRef<SectionElement, HomeSectionProps>(
  ({ containerRef, homeRef }) => {
    const router = useRouter()

    const handleClick = () => {
      // scrollToId('about')
    }

    useEffect(() => {
      const targetElement = document.getElementById('home')
      if (targetElement) {
        if (router.route.includes(targetElement.id)) {
          containerRef?.current.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'auto',
          })
        }
      }
    }, [])

    return (
      <div
        id="home"
        className="h-screen w-screen snap-start"
        ref={homeRef}
        data-path="/home"
      >
        <div className="ml-10 grid h-screen grid-cols-6 grid-rows-6 md:ml-52">
          <div className="col-start-1 col-end-5 row-start-2 text-[15px]">
            <div className="relative flex h-full w-full flex-col items-start justify-start space-y-10">
              <img
                src="/hero-large.png"
                className="absolute left-40 top-8 w-20 rounded-full shadow xs:left-[250px] md:left-[450px] md:w-32 xlg:left-[525px]"
              />
              <div className="relative text-5xl dark:text-rgcolor6 md:text-8xl">
                <div className="absolute -top-6 text-[15px] dark:text-rgcolor4 md:-top-2 md:left-4">
                  Hi, I'm
                </div>
                Raul Gavriș
              </div>
              <div className="relative ml-1 text-4xl dark:text-rgcolor2 md:text-7xl">
                <div className="absolute -left-1 -top-10 text-[15px] dark:text-rgcolor4 md:-top-4 md:left-2">
                  and I'm a
                </div>
                Full Stack Engineer
              </div>
              <div className="relative ml-1 max-w-2xl text-sm dark:text-rgcolor2 md:text-lg">
                I'm a software engineer specializing in building designing
                exceptional digital experiences. Currently, I'm more focused on
                improving my skils of understanding and implementing complex
                algorithms for various online judges and building scalable smart
                contracts in Solidity.
              </div>
              <button
                onClick={handleClick}
                type="button"
                className="button-3d mousehover relative z-50 px-4 py-2 text-base font-medium leading-6 focus:outline-none dark:bg-rgcolor1 dark:text-rgcolor2 dark:hover:bg-rgcolor0 dark:hover:text-rgcolor6"
              >
                <div className="background-3d z-0 rounded-md dark:bg-rgcolor2"></div>
                <span>Explore this website</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  },
)

HomeSection.displayName = 'home'

export default HomeSection
