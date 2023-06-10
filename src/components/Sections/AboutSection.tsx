import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'
import { InfoSvg } from '../Svg'
import { useWindowSize } from '@/lib/hooks/useWindowSize'

const InfoItem = ({ title, value, onClick, className }: InfoItemProps) => (
  <div
    onClick={onClick}
    className={`${className} flex h-40 w-24 flex-col items-center justify-center font-raulmono text-xs font-bold sm:text-sm`}
  >
    <span className="mb-2 dark:text-red">
      <InfoSvg className="h-4 w-24 rotate-90" />
    </span>
    <div className="whitespace-break-spaces text-center">{title}</div>
    <div>{value}</div>
  </div>
)

const AboutSection = ({ containerRef, aboutRef }: AboutSectionProps) => {
  const router = useRouter()
  const image = useRef()
  const box1 = useRef()
  const box2 = useRef()

  const [width] = useWindowSize()

  useEffect(() => {
    const animate = (ref, config) => {
      gsap.fromTo(ref.current, config.from, {
        ...config.to,
        scrollTrigger: {
          ...config.scrollTrigger,
          trigger: aboutRef.current,
          scroller: containerRef.current,
          toggleActions: 'play complete restart reverse',
        },
      })
    }

    const animations = [
      {
        ref: image,
        from: { opacity: 0, y: -100, x: -1000 },
        to: {
          duration: 1,
          delay: 1,
          opacity: 1,
          y: 0,
          x: 0,
          ease: 'easeOut',
        },
      },
      {
        ref: box1,
        from: { opacity: 0, y: 1000 },
        to: {
          duration: 1,
          delay: 1,
          opacity: 1,
          y: 0,
          ease: 'easeOut',
        },
      },
      {
        ref: box2,
        from: { opacity: 0, x: 1000, y: 1000 },
        to: {
          duration: 1,
          delay: 1,
          opacity: 1,
          x: 0,
          y: 0,
          ease: 'easeOut',
        },
      },
    ]

    const ctx = gsap.context(() => {
      animations.forEach(({ ref, ...config }) => animate(ref, config))
    })

    return () => ctx.revert()
  }, [aboutRef, containerRef])

  useEffect(() => {
    const targetElement = document.getElementById('about')
    if (targetElement) {
      if (router.route.includes(targetElement.id)) {
        containerRef.current.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'auto',
        })
      }
    }
  }, [containerRef, router.route])

  return (
    <div
      id="about"
      className="flex h-full min-h-screen w-screen flex-row items-start justify-start md:items-center md:justify-center"
      ref={aboutRef}
      data-path="/about"
    >
      <div className="relative flex h-full w-full flex-col items-center justify-start md:flex-row">
        <div className="dark:bg-darkBlack">
          <div className="relative flex w-full flex-row items-center justify-start max-[640px]:flex-col">
            <div className="ml-10 flex w-1/6 flex-col items-center justify-start sm:flex-row">
              {width >= 640 && (
                <div
                  onClick={() => {
                    router.push('/companies')
                  }}
                  className="m-0 h-full w-1/2 p-0 max-[1100px]:w-[100px]"
                >
                  <div className="mousehover group flex flex-col items-center justify-center gap-0 hover:cursor-pointer">
                    <div className="animate-bounce text-xs text-lightGray group-hover:animate-spin">
                      click me!
                    </div>
                    <div className="flex rotate-0 flex-row items-center justify-center gap-20 text-center text-xs dark:text-lightGray sm:-rotate-90">
                      <InfoItem
                        className=""
                        title="SATISFACTION CLIENTS"
                        value="100%"
                      />
                      <InfoItem
                        className=""
                        title="CLIENTS ON WORLDWIDE"
                        value="8"
                      />
                      <InfoItem className="" title="PROJECTS DONE" value="24" />
                    </div>
                  </div>
                </div>
              )}

              {width < 640 && (
                <div
                  onClick={() => {
                    router.push('/companies')
                  }}
                  className="h-full w-full"
                >
                  <div className="mousehover group flex flex-col items-center justify-center gap-0 hover:cursor-pointer">
                    <div className="animate-bounce text-xs text-lightGray group-hover:animate-spin">
                      click me!
                    </div>
                    <div className="flex rotate-0 flex-row items-center justify-center gap-10 text-center text-xs dark:text-lightGray sm:-rotate-90">
                      <InfoItem
                        className=""
                        title="SATISFACTION CLIENTS"
                        value="100%"
                      />
                      <InfoItem
                        className=""
                        title="CLIENTS ON WORLDWIDE"
                        value="8"
                      />
                      <InfoItem className="" title="PROJECTS DONE" value="24" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex w-full flex-row items-center justify-center gap-0 max-[900px]:flex-col sm:justify-start">
              <div className="relative z-30 flex w-1/2 flex-col items-start justify-center gap-4 dark:text-offWhite sm:w-full">
                <div className="mb-8 whitespace-nowrap font-raulmono text-5xl font-bold text-offWhite">
                  About Me
                </div>
                <div className="w-52 text-base sm:w-80 sm:text-sm">
                  I am a Full Stack Engineer with 4+ years of experience. I use
                  my expertise, skills, and passion to architect, design, and
                  implement modern, practical, and reliable systems for my
                  clients.
                </div>
                <div className="w-52 text-base sm:w-80 sm:text-sm">
                  Software engineering is a never-ending puzzle that I am
                  passionately engaged in solving. I believe in the power of
                  programming to transform and improve the lives of people
                  around the world.
                </div>
                <div className="mt-8 font-raulmono text-[24px] font-bold leading-[36px]">
                  Some of my skills:
                </div>
                <div className="ml-2 w-52 flex-col gap-2 text-base font-semibold sm:w-96 sm:text-sm">
                  <div>
                    <span className="dark:text-red">•</span> ExpressJS / NestJS
                  </div>
                  <div>
                    <span className="dark:text-red">•</span> React.js / Next.js
                  </div>
                  <div>
                    <span className="dark:text-red">•</span> Modern Javascript
                    with Typescript
                  </div>
                  <div>
                    <span className="dark:text-red">•</span> SOLID Principles of
                    programming(OOP, Design Patterns, Algorithms, Data
                    Structures)
                  </div>
                  <div>
                    <span className="dark:text-red">•</span> MySQL, PostgreSQL,
                    Redis, RabbitMQ
                  </div>
                  <div>
                    <span className="dark:text-red">•</span> Domain-Driven
                    Design (DDD) / CQRS
                  </div>
                  <div>
                    <span className="dark:text-red">•</span> Docker /
                    Microservices / Event-Driven Architectures
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <div className="relative z-20 w-40 md:bottom-4 md:w-96">
                  <img
                    alt="heroAbout"
                    ref={image}
                    src="/raul-about.png"
                    className="z-20 opacity-0 drop-shadow-basic xxs:rounded-full sm:rounded-3xl"
                  />
                </div>
                <div
                  ref={box1}
                  className="absolute bottom-0 left-10 z-10 h-[500px] w-[350px] border-2 opacity-0 shadow-basic drop-shadow-basic dark:border-lightGray dark:bg-darkGray max-[640px]:bottom-[170px]"
                ></div>
                <div
                  ref={box2}
                  className="absolute -bottom-10 left-20 z-0  h-[500px] w-[350px] border-2 opacity-0 shadow-basic drop-shadow-basic dark:border-lightGray dark:bg-darkGray max-[640px]:bottom-[600px]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutSection.displayName = 'about'

export default AboutSection
