import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'
import ProjectShowcase from '@/components/ProjectShowcase'
import PortfolioSelected from '@/components/PortfolioSelected'
import IonIcon from '@reacticons/ionicons'

let data = [
  {
    id: 1,
    name: 'DevNest - Tes',
    active: true,
    description: `On this project I worked with NodeJS, ReactJS, MongoDB, PostgreSQL;
                  The application is made with microservices architecture which is running on Docker / Kubernetes and RabbitMQ as a messaging queue;
                  The biggest challenge on this project was finding the way in which microservices are communicating with each other and with other tools like
                  RabbitMQ or Kibana and navigate through the code of each microservice until finding the problem;
                  I was maintaining over 30 microservices with dependencies in each other and I created 2 new ones;`,
    technologies: ['NodeJS', 'ReactJS', 'Docker', 'Kubernetes', 'Nginx'],
    gitLink: 'https://tes.com',
    projectUrl: 'https://tes.com',
    imageUrl: '/tes-showcase.png',
  },
  {
    id: 2,
    name: 'DevNest - iPost',
    active: false,
    description: `The application is built using Mojolicious as a framework, MySQL as a database server, infrastructure takes full advantage of AWS products and features:
                  elastic beanstalk and dockers for deployment and containing multiple micro-services on the same machines, autoscaling groups and load balancers for dynamic load control,
                  SQS and Redis to link different parts of the application;
                  On the back-end side I've used Perl, MySQL and AWS,
                  On the front-end side I've used React, Nuclear.js and Immutable with unit tests using Jest and React Testing Library;
                  The architecture and scalability of the project was designed with a master - worker / pattern,
                  The Email Marketing Platform successfully delivers over 25 million emails a day during peak activity times;`,
    technologies: ['Perl', 'AWS', 'MySQL'],
    gitLink: 'https://ipost.com',
    projectUrl: 'https://ipost.com',
    imageUrl: '/ipost-showcase.png',
  },
  {
    id: 3,
    name: 'Adva - Datarails',
    active: false,
    description: `I worked on an accounting application which is an addin for Excel which is working in the browser;
                  On this project I worked on VueJS for the frontend and in C# for the backend;
                  The biggest challenge for this project was understanding the Microsoft developer tools in order to communicate with Excel from VueJS;
                  The Data served in VueJS comes from a REST API done in C# .Net;`,
    technologies: ['VueJs', 'C#', 'Microsoft API'],
    gitLink: 'https://datarails.com',
    projectUrl: 'https://datarails.com',
    imageUrl: '/datarails-showcase.png',
  },
  {
    id: 4,
    name: 'ESOS',
    active: false,
    description: `I worked on an application for telemedicine, as a freelancer, which uses NextJS, PostgreSQL, Typescript, tRPC, websockets for chat and video chat;
                  This application is hosted on Vercel;
                  With this occasion I managed to learn a new framework in a short time;
                  The biggest challenge on this project was the websocket implementation with ws protocol and making it secured;`,
    technologies: ['NextJS', 'Prisma', 'PostgreSQL', 'WebSocket'],
    gitLink: 'https://esos.ro',
    projectUrl: 'https://esos.ro',
    imageUrl: '/esos-showcase.png',
  },
  {
    id: 5,
    name: 'Spyhce',
    active: false,
    description: `I worked on a web-scraping platform based on scrapy framework and I helped with creating and fixing around 100 spiders for various websites;
                  Also here I learned django, flask and I managed to build some full stack applications based on react and django;
                  The biggest challenge on this project was learning about website security and how to crack it;
                  From trying to get the data directly from html (xpath) or from json (requests made to the api) to getting the data from a cdn (images);
                  Also writing the spider to conform with the website human flow (login, going to listing page, going to detail page), also rotating IPs so they won't get blacklisted;`,
    technologies: ['Python', 'Django', 'Scrapy'],
    gitLink: 'https://www.spyhce.com/',
    projectUrl: 'https://www.spyhce.com/',
    imageUrl: '/spyhce-showcase.png',
  },
  {
    id: 6,
    name: 'My Portfolio',
    active: false,
    description: `This website was made with the purpose of showing my work and creating blog posts`,
    technologies: ['ReactJS', 'React Router', 'Tailwind'],
    gitLink: 'https://github.com/raulgavris/portfolio',
    projectUrl: 'https://raulgavris.com',
    imageUrl: '/portfolio-showcase.png',
  },
]

const PortfolioSection = ({
  containerRef,
  portfolioRef,
}: PortfolioSectionProps) => {
  const router = useRouter()

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    data = data.map((item) => {
      return { ...item, active: false }
    })
    const objIndex = data.findIndex((obj) => obj.id == newIndex + 1)
    data[objIndex].active = true
    setCurrentIndex(newIndex)
  }

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1
    data = data.map((item) => {
      return { ...item, active: false }
    })
    const objIndex = data.findIndex((obj) => obj.id == newIndex + 1)
    data[objIndex].active = true
    setCurrentIndex(newIndex)
  }

  const goToSlide = (index) => {
    data = data.map((item) => {
      return { ...item, active: false }
    })
    const objIndex = data.findIndex((obj) => obj.id == index + 1)
    data[objIndex].active = true
    setCurrentIndex(index)
  }

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       portfolioRef.current,
  //       {
  //         opacity: 0,
  //         x: -1000,
  //       },
  //       {
  //         scrollTrigger: {
  //           trigger: portfolioRef.current,
  //           scroller: containerRef.current,
  //           toggleActions: 'play complete restart reverse',
  //         },
  //         duration: 2,
  //         delay: 1,
  //         opacity: 1,
  //         x: 0,
  //         ease: 'Power3.easeOut',
  //       },
  //     )
  //   })
  //   return () => ctx.revert()
  // }, [containerRef, portfolioRef])

  useEffect(() => {
    const targetElement = document.getElementById('portfolio')
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
      id="portfolio"
      className="h-screen w-screen"
      ref={portfolioRef}
      data-path="/portfolio"
    >
      <div className="max-w-9xl grid h-full w-full grid-cols-12 grid-rows-12">
        <div className="col-start-2 col-end-6 row-start-3 row-end-3">
          <div className="flex flex-row items-start justify-start">
            <div className="ml-10 text-3xl dark:text-lightGray">
              Projects I worked on
            </div>
          </div>
        </div>
        <div className="relative col-start-2 col-end-11 row-start-3 row-end-12">
          <ProjectShowcase
            projectName={data[currentIndex].name}
            imageUrl={data[currentIndex].imageUrl}
            description={data[currentIndex].description}
            technologies={data[currentIndex].technologies}
            gitLink={data[currentIndex].gitLink}
            projectUrl={data[currentIndex].projectUrl}
          />
          <button
            className="absolute bottom-1/2 left-4"
            onClick={() => {
              prevSlide()
            }}
          >
            <div className="mousehover text-3xl transition-all duration-200 hover:scale-125 active:scale-100 dark:text-lightGray">
              <IonIcon name="chevron-back-outline"></IonIcon>
            </div>
          </button>
          <button
            className="absolute bottom-1/2 right-4"
            onClick={() => {
              nextSlide()
            }}
          >
            <div className="mousehover text-3xl transition-all duration-200 hover:scale-125 active:scale-100 dark:text-lightGray">
              <IonIcon name="chevron-forward-outline"></IonIcon>
            </div>
          </button>
        </div>
        <div className="bottom-2 left-1/2 col-start-6 col-end-7 row-start-11 row-end-12 flex flex-row items-center justify-center space-x-3">
          {data.map((item) => {
            return (
              <div
                key={item.name}
                onClick={() => {
                  goToSlide(item.id - 1)
                }}
              >
                <PortfolioSelected active={item.active} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

PortfolioSection.displayName = 'portfolio'

export default PortfolioSection
