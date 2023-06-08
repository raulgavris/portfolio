import React, { RefObject, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Button3 from '@/components/Button3'

interface HomeSectionProps {
  containerRef: RefObject<HTMLDivElement>
  homeRef: RefObject<SectionElement>
}

const HomeSection = ({ containerRef, homeRef }: HomeSectionProps) => {
  const router = useRouter()

  const { about } = useSelector((state: SectionSliceState) => {
    return state.SectionSlice
  })

  useEffect(() => {
    const targetElement = document.getElementById('home')
    if (targetElement) {
      if (router.route.includes(targetElement.id)) {
        containerRef.current.scrollTo({
          top: 0,
          behavior: 'auto',
        })
      }
    }
  }, [containerRef, router.route])

  return (
    <div
      id="home"
      className="h-screen w-screen"
      ref={homeRef}
      data-path="/home"
    >
      <div className="mx-auto h-5/6 w-full max-w-6xl">
        <div className="relative flex h-full w-full flex-col items-start justify-center">
          <div className="relative flex flex-row">
            <div className="flex flex-col">
              <div className="font-raulmono text-[25px] font-normal leading-[37px] text-shadow-text dark:text-red">
                Hi, I'm
              </div>
              <div className="relative text-[96px] font-medium leading-[112px] text-shadow-text dark:text-offWhite">
                Raul Gavriș
              </div>
            </div>
            <img
              alt="heroLarge"
              src="/hero-large.png"
              className="mousehover absolute -bottom-10 -right-52 z-50 h-40 rounded-[25px] opacity-80 shadow-basic transition-all duration-300 hover:rounded-none hover:opacity-100 hover:shadow-none"
            />
          </div>
          <div className="font-raulmono text-[25px] font-normal leading-[37px] text-shadow-text dark:text-red">
            and I'm a
          </div>
          <div className="relative text-[96px] font-medium leading-[112px] -tracking-[0.065em] text-shadow-text dark:text-lightGray">
            Full Stack Engineer
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="relative max-w-2xl text-[20px] font-light leading-[23px] dark:text-lightGray">
              I'm a software engineer specializing in building designing
              exceptional digital experiences. Currently, I'm more focused on
              improving my skils of understanding and implementing complex
              algorithms for various online judges and building scalable smart
              contracts in Solidity.
            </div>
            <Button3
              text={'Explore this website'}
              onClick={() => {
                if (about && about.current) {
                  containerRef.current.scrollTo({
                    top: about.current.offsetTop,
                    behavior: 'smooth',
                  })
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

HomeSection.displayName = 'home'

export default HomeSection
