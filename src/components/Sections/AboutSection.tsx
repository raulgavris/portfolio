import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'
import ClientsModal from '../ClientsModal'
import { InfoSvg } from '../Svg'
const InfoItem = ({ title, value, onClick, className }: InfoItemProps) => (
  <div
    onClick={onClick}
    className={`${className} flex h-40 w-24 flex-row items-center justify-center font-raulmono text-sm font-bold sm:flex-col`}
  >
    <span className="mb-2 dark:text-red">
      <InfoSvg className="h-4 w-4 rotate-90" />
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

  const [showClients, setShowClients] = useState(false)

  const handleShowClients = () => {
    setShowClients(!showClients)
  }

  const clientsModal = useRef()

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
        containerRef?.current.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'auto',
        })
      }
    }
  }, [containerRef, router.route])

  return (
    <div
      id="about"
      className="h-screen w-screen"
      ref={aboutRef}
      data-path="/about"
    >
      {showClients && (
        <ClientsModal setShowClients={setShowClients} pageRef={clientsModal} />
      )}
      <div className="relative h-full max-h-[1000px] w-full max-w-[1500px]">
        <div className="absolute -left-[70px] top-[35%]">
          <div className="flex -rotate-90 flex-row items-center justify-center gap-10 text-center text-xs dark:text-lightGray">
            <InfoItem className="" title="SATISFACTION CLIENTS" value="100%" />
            <InfoItem
              title="CLIENTS ON WORLDWIDE"
              value="8"
              onClick={handleShowClients}
              className="mousehover hover:cursor-pointer"
            />
            <InfoItem className="" title="PROJECTS DONE" value="24" />
          </div>
        </div>
        <div className="absolute left-[20%] top-[15%] dark:bg-darkBlack">
          <div className="items-left relative flex flex-col justify-start gap-0 sm:flex-row mlg:gap-20 lg:gap-16 xl:gap-32 2xl:gap-40">
            <div className="items-left relative z-30 flex flex-col justify-center gap-4 dark:text-offWhite">
              <div className="mb-8 font-raulmono text-5xl font-bold text-offWhite">
                About Me
              </div>
              <div className="w-52 text-base sm:w-80 sm:text-sm">
                I am a Full Stack Engineer with 4+ years of experience. I use my
                expertise, skills, and passion to architect, design, and
                implement modern, practical, and reliable systems for my
                clients.
              </div>
              <div className="w-52 text-base sm:w-80 sm:text-sm">
                Software engineering is a never-ending puzzle that I am
                passionately engaged in solving. I believe in the power of
                programming to transform and improve the lives of people around
                the world.
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
                  programming(OOP, Design Patterns, Algorithms, Data Structures)
                </div>
                <div>
                  <span className="dark:text-red">•</span> MySQL, PostgreSQL,
                  Redis, RabbitMQ
                </div>
                <div>
                  <span className="dark:text-red">•</span> Domain-Driven Design
                  (DDD) / CQRS
                </div>
                <div>
                  <span className="dark:text-red">•</span> Docker /
                  Microservices / Event-Driven Architectures
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-20 xxs:bottom-[460px] xxs:right-0 xxs:w-10 xs:-right-10 xs:bottom-[400px] xs:w-20 xsm:bottom-[350px] xsm:w-32 sm:-right-52 sm:bottom-[200px] sm:w-52 md:-right-96 md:bottom-4 md:w-96">
                <img
                  alt="heroAbout"
                  ref={image}
                  src="/raul-about.png"
                  className="z-20 opacity-0 drop-shadow-basic xxs:rounded-full sm:rounded-3xl"
                />
              </div>
              <div
                ref={box1}
                className="absolute bottom-0 left-10 z-10 h-[500px] w-[350px] border-2 opacity-0 shadow-basic drop-shadow-basic dark:border-lightGray dark:bg-darkGray"
              ></div>
              <div
                ref={box2}
                className="absolute -bottom-10 left-20 z-0  h-[500px] w-[350px] border-2 opacity-0 shadow-basic drop-shadow-basic dark:border-lightGray dark:bg-darkGray"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutSection.displayName = 'about'

export default AboutSection
