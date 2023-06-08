import React from 'react'
import Button3 from '@/components/Button3'
import { useRouter } from 'next/router'
import {
  BriefcaseSvg,
  EmailSvg,
  GitSvg,
  GlobeSvg,
  LinkedinSvg,
  PhoneSvg,
  UserSvg,
} from '@/components/Svg'

const data = [
  {
    id: 1,
    name: 'Apr 2023 - Present: DevNest - Summerwood, Cluj-Napoca, Romania | Role: Full Stack Developer',
    description: ``,
    projectUrl: 'https://www.summerwood.com/',
  },
  {
    id: 2,
    name: 'Apr 2023 - Present: DevNest - FitchRatings, Cluj-Napoca, Romania | Role: Full Stack Developer',
    description: ``,
    projectUrl: 'https://www.fitchratings.com/',
  },
  {
    id: 3,
    name: 'Jan 2022 - Apr 2023: DevNest - Tes, Cluj-Napoca, Romania | Role: Full Stack Developer',
    description: `On this project I worked with NodeJS, ReactJS, MongoDB, PostgreSQL;
                  The application is made with microservices architecture which is running on Docker / Kubernetes and RabbitMQ as a messaging queue;
                  The biggest challenge on this project was finding the way in which microservices are communicating with each other and with other tools like
                  RabbitMQ or Kibana and navigate through the code of each microservice until finding the problem;
                  I was maintaining over 30 microservices with dependencies in each other and I created 2 new ones;`,
    projectUrl: 'https://tes.com',
  },
  {
    id: 4,
    name: 'Aug 2019 - Dec 2021: DevNest - iPost, Cluj-Napoca, Romania | Role: Full Stack Developer',
    description: `The application is built using Mojolicious as a framework, MySQL as a database server, infrastructure takes full advantage of AWS products and features:
                  elastic beanstalk and dockers for deployment and containing multiple micro-services on the same machines, autoscaling groups and load balancers for dynamic load control,
                  SQS and Redis to link different parts of the application;
                  On the back-end side I've used Perl, MySQL and AWS,
                  On the front-end side I've used React, Nuclear.js and Immutable with unit tests using Jest and React Testing Library;
                  The architecture and scalability of the project was designed with a master - worker / pattern,
                  The Email Marketing Platform successfully delivers over 25 million emails a day during peak activity times;`,
    projectUrl: 'https://ipost.com',
  },
  {
    id: 5,
    name: 'Jun 2022 - Apr 2023: AdvaSoftware - Datarails, Cluj-Napoca, Romania | Role: Full Stack Developer',
    description: `I worked on an accounting application which is an addin for Excel which is working in the browser;
                  On this project I worked on VueJS for the frontend and in C# for the backend;
                  The biggest challenge for this project was understanding the Microsoft developer tools in order to communicate with Excel from VueJS;
                  The Data served in VueJS comes from a REST API done in C# .Net;`,
    projectUrl: 'https://datarails.com',
  },
  {
    id: 6,
    name: 'Oct 2021 - Jan 2022: Esos, Cluj-Napoca, Romania | Role: Full Stack Developer',
    description: `I worked on an application for telemedicine, as a freelancer, which uses NextJS, PostgreSQL, Typescript, tRPC, websockets for chat and video chat;
                  This application is hosted on Vercel;
                  With this occasion I managed to learn a new framework in a short time;
                  The biggest challenge on this project was the websocket implementation with ws protocol and making it secured;`,
    projectUrl: 'https://esos.ro',
  },
  {
    id: 7,
    name: 'Jan 2019 - Sep 2019: Spyhce/8vance, Cluj-Napoca, Romania | Role: Python Developer',
    description: `I worked on a web-scraping platform based on scrapy framework and I helped with creating and fixing around 100 spiders for various websites;
                  Also here I learned django, flask and I managed to build some full stack applications based on react and django;
                  The biggest challenge on this project was learning about website security and how to crack it;
                  From trying to get the data directly from html (xpath) or from json (requests made to the api) to getting the data from a cdn (images);
                  Also writing the spider to conform with the website human flow (login, going to listing page, going to detail page), also rotating IPs so they won't get blacklisted;`,
    projectUrl: 'https://www.spyhce.com/',
  },
]

const Resume = () => {
  const router = useRouter()

  return (
    <div className="relative m-0 flex h-full w-screen max-w-[2000px] flex-row items-center justify-center font-raullato">
      <div className="fixed left-10 top-10 flex flex-col items-start justify-start gap-4">
        <a
          href="https://drive.google.com/file/d/1Da6QRKw0EMXsygym3qC5-dQdgnU_an_u/view?usp=sharing"
          download="Raul Gavris CV.pdf"
          target="_blank"
        >
          <Button3
            onClick={() => {
              console.log('downloaded resume')
            }}
            text={'DOWNLOAD RESUME'}
          />
        </a>
        <Button3
          onClick={() => {
            router.push('/home')
          }}
          text={'Go back to Landing page'}
        />
      </div>
      <div className="relative ml-96 mr-96 flex h-full min-h-[100vh] w-full flex-col items-start justify-start bg-offWhite pl-[220px]">
        <div className="flex h-[140px] w-full flex-col items-start justify-center bg-redBlack pl-6 shadow-dark">
          <div className="text-5xl font-black text-shadow-dark">
            Raul Gavriș
          </div>
          <div className="text-3xl font-black text-shadow-dark">
            Full Stack Developer
          </div>
        </div>
        <div className="absolute left-0 top-0 flex h-full min-h-[100vh] w-[220px] flex-col items-center justify-start gap-4 border-r-[1px] border-black bg-redBlack shadow-dark">
          <div>
            <img
              alt="heroLarge"
              src="/hero-large.png"
              className="mousehover z-50 h-[150px] w-[150px] rounded-[5px] drop-shadow-basic transition-all duration-300 hover:rounded-none hover:shadow-none"
            />
          </div>
          <div className="flex max-w-[150px] flex-col items-start justify-start gap-2 text-xs">
            <div className="text-xl font-black text-shadow-dark">CONTACT</div>
            <div className="flex flex-row items-center justify-start gap-0.5 font-black text-shadow-dark">
              <PhoneSvg className="h-4 w-4 fill-white drop-shadow-dark" />
              <div>+40758585407</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 font-black text-shadow-dark">
              <EmailSvg className="h-4 w-4 fill-white drop-shadow-dark" />
              <div>
                <a href="mailto:rg.raulgavris@gmail.com">
                  rg.raulgavris@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 font-black text-shadow-dark">
              <GitSvg className="h-4 w-4 fill-white drop-shadow-dark" />
              <div>
                <a href="https://github.com/raulgavris">/raulgavris/</a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 font-black text-shadow-dark">
              <LinkedinSvg className="h-4 w-4 fill-white drop-shadow-dark" />
              <div>
                <a href="https://www.linkedin.com/in/rg-raul-gavris/">
                  /rg-raul-gavris/
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 font-black text-shadow-dark">
              <GlobeSvg className="h-4 w-4 fill-white drop-shadow-dark" />
              <div>
                <a target="_blank" href="https://raulgavris.com">
                  https://raulgavris.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 text-xs">
            <div className="text-xl font-black text-shadow-dark">SKILLS</div>
            <div className="max-w-[150px] whitespace-break-spaces text-shadow-dark">
              Algorithms / Data structures React.js / Next.js / Typescript
              Node.js / Express.js / Nest.js Python / Django / Scrapy Docker /
              Kubernetes / Microservices / AWS / RabbitMQ Design Patterns / tRPC
              / WebSocket / OOP PostgreSQL / MySQL / MongoDB
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 text-xs">
            <div className="text-xl font-black text-shadow-dark">EDUCATION</div>
            <div className="max-w-[150px] whitespace-break-spaces text-shadow-dark">
              <div className="font-black">Babes-Bolyai University</div>
              Faculty of Mathematics and Computer Science Cluj-Napoca, 2018 -
              2021
            </div>
            <div className="max-w-[150px] whitespace-break-spaces text-shadow-dark">
              <div className="font-black">
                “Onisifor Ghibu” Theoretical High School
              </div>
              Mathematics - Computer Science Cluj-Napoca, 2006 - 2018
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 text-xs">
            <div className="text-xl font-black text-shadow-dark">AWARDS</div>
            <div className="max-w-[150px] whitespace-break-spaces text-shadow-dark">
              <a
                target="_blank"
                href="http://olimpiada.info/oji2016/index.php?cid=rezultate&w=lic&judet=14&clasa=10"
              >
                Honorable mention in the Romanian County Olympiad in Informatics
                in 2016
              </a>
            </div>
            <div className="max-w-[150px] whitespace-break-spaces text-shadow-dark">
              <a
                target="_blank"
                href="https://www.infoarena.ro/utilizator/gavrisraul"
              >
                Participated in the National programming contest “Algoritmiada”
                hosted and administered by infoarena
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 text-xs">
            <div className="text-xl font-black text-shadow-dark">LANGUAGES</div>
            <div className="max-w-[150px] whitespace-break-spaces text-shadow-dark">
              <div className="font-black">English: fluent</div>
              (C1 level average of Reading, Writing, Listening, and Speaking)
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 px-6 py-6 text-blackDilluated">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-center justify-start gap-2">
              <UserSvg className="h-6 w-6 fill-blackDilluated drop-shadow-basic" />
              <div className="text-xl font-black text-shadow-text">
                ABOUT ME
              </div>
            </div>
            <div className="text-sm">
              I am a <span className="font-black">Full Stack Developer</span>{' '}
              with <span className="font-black">4+ years of experience</span> in
              web development. I use my expertise, skills, and passion to
              architect, design, and implement modern, practical, and reliable
              systems for my clients.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex flex-row items-center justify-start gap-2">
              <BriefcaseSvg className="h-6 w-6 fill-blackDilluated drop-shadow-basic" />
              <div className="text-xl font-black text-shadow-text">
                MOST RELEVANT WORK EXPERIENCE
              </div>
            </div>
            {data.map((project) => {
              const newDescription = project.description.split(';')

              return (
                <div
                  key={project.name}
                  className="flex flex-col items-start justify-start gap-2"
                >
                  <div className="flex flex-row items-center justify-start gap-3 text-base font-black">
                    <div className="h-2.5 w-2.5 rounded-full bg-blackDilluated"></div>
                    <a target="_blank" href={project.projectUrl}>
                      <div>{project.name}</div>
                    </a>
                  </div>
                  {newDescription.map((description) => {
                    if (description) {
                      return (
                        <div
                          key={project.id}
                          className="ml-4 flex flex-row items-center justify-start gap-2 text-sm"
                        >
                          <div className="h-2 w-2 min-w-[8px] rounded-full bg-blackDilluated"></div>
                          <div>{description}</div>
                        </div>
                      )
                    }
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

Resume.displayName = 'resume'

export default Resume
