import { useRouter } from 'next/router'
import {
  DevNestSvg,
  TesSvg,
  LeftArrowSvg,
  OpenSvg,
  GitSvg,
} from '@/components/Svg'

const ProjectDetail = () => {
  const router = useRouter()

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-10 p-20">
      <div className="mt-16 flex h-full w-full max-w-[750px] flex-col items-center justify-center gap-4">
        <div className="flex flex-row items-center justify-center gap-10 font-raulmono text-4xl text-lightGray">
          <div className="relative">
            Company
            <DevNestSvg className="absolute -left-8 -top-12 h-20 w-20" />
          </div>
          <div>-</div>
          <div className="relative">
            Project
            <TesSvg className="absolute -right-8 -top-12 h-20 w-20" />
          </div>
        </div>
        <div className="ml-[60px] flex flex-row items-center justify-center gap-12 font-raulmono text-xl text-lightGray">
          <div>Full Stack Engineer</div>
          <div>|</div>
          <div className="flex flex-row items-center justify-start gap-4">
            <span className="text-teal">2019/06/01</span>{' '}
            <LeftArrowSvg className="h-4 w-4 rotate-180 fill-teal" />
            <span className="text-teal">2020/04/25</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-4">
          <div className="relative ml-[76px] flex flex-row items-center justify-center gap-2 bg-teal p-1 font-raulroboto text-xl text-lightGray">
            <div className="text-darkGray">Technologies used</div>
            <div className="text-softGreen">-</div>
            <div className="flex flex-row items-center justify-start gap-2">
              <div>Perl,</div>
              <div>AWS,</div>
              <div>MySQL</div>
            </div>
          </div>
          <div className="flex flex-row gap-6 dark:text-lightGray">
            <a
              // href={gitLink}
              className="mousehover opacity-90 drop-shadow-basic transition-all duration-200 hover:scale-125 hover:cursor-pointer hover:opacity-100 active:scale-100"
            >
              <GitSvg className="h-5 w-5 fill-lightGray hover:fill-teal" />
            </a>
            <a
              // href={projectUrl}
              className="mousehover opacity-90 drop-shadow-basic transition-all duration-200 hover:scale-125 hover:cursor-pointer hover:opacity-100 active:scale-100"
            >
              <OpenSvg className="h-5 w-5 fill-lightGray hover:fill-teal" />
            </a>
          </div>
        </div>
        <div className="text-2xl text-lightGray">Summary</div>
        <div className="max-w-[560px] text-justify text-base leading-[19px]">
          <span className="text-teal">•</span> The application is built using
          Mojolicious as a framework, MySQL as a database server, infrastructure
          takes full advantage of AWS products and features: elastic beanstalk
          and dockers for deployment and containing multiple micro-services on
          the same machines, autoscaling groups and load balancers for dynamic
          load control, SQS and Redis to link different parts of the application
        </div>
        <div className="max-w-[560px] text-justify text-base leading-[19px]">
          <span className="text-teal">•</span> On the back-end side I've used
          Perl, MySQL and AWS, On the front-end side I've used React, Nuclear.js
          and Immutable with unit tests using Jest and React Testing Library
        </div>
        <div className="max-w-[560px] text-justify text-base leading-[19px]">
          <span className="text-teal">•</span> The architecture and scalability
          of the project was designed with a master - worker / pattern, The
          Email Marketing Platform successfully delivers over 25 million emails
          a day during peak activity times
        </div>
        <div className="text-2xl text-lightGray">Responsabilities</div>
        <div className="max-w-[560px] text-justify text-base leading-[19px]">
          Key Responsibilities: Briefly describe the main duties and
          responsibilities you held in the role. Focus on tasks that are
          relevant to the job you're applying for, such as "Designed and
          developed RESTful APIs," "Optimized SQL queries for improved
          performance," or "Implemented user interfaces using React.js."
        </div>
        <div className="text-2xl text-lightGray">
          Accomplishments and Impact
        </div>
        <div className="max-w-[560px] text-justify text-base leading-[19px]">
          Accomplishments and Impact: Showcase your achievements by mentioning
          specific outcomes, such as "Improved application performance by 30%,"
          "Successfully led a team of 5 developers," or "Contributed to the
          development of a product with 100,000+ active users."
        </div>
      </div>
      <button
        className="mousehover group flex flex-row items-center justify-start gap-2"
        onClick={() => {
          router.push('/portfolio')
        }}
      >
        <LeftArrowSvg className="fill-white transition-all duration-200 group-hover:-translate-x-1" />
        <span className="font-raulmono text-base">Go back to Portfolio.</span>
      </button>
    </div>
  )
}

ProjectDetail.displayName = 'projectDetail'

export default ProjectDetail
