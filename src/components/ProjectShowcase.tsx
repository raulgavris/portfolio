import { OpenSvg, GitSvg } from './Svg'

const ProjectShowcase = ({
  projectName,
  imageUrl,
  description,
  technologies,
  gitLink,
  projectUrl,
}) => {
  const newDescription = description.split(';')

  return (
    <>
      <div className="relative h-full w-full">
        <div className="absolute left-6 top-[8%] text-2xl dark:text-offWhite">
          {projectName}
        </div>
        <div className="absolute left-16 top-[15%] h-4/6 w-1/2">
          <a className="mousehover h-full w-full" href={projectUrl}>
            <img
              alt="imageshowcase"
              className="h-full w-full rounded-[10px] shadow-basic drop-shadow-basic grayscale transition-all duration-200 hover:grayscale-0"
              src={imageUrl}
            />
          </a>
        </div>
        <div className="absolute right-16 top-[30%] h-auto max-h-[300px] w-1/2 rounded-[10px] p-10 text-sm shadow-basic drop-shadow-basic dark:bg-teal dark:text-offWhite">
          {newDescription.map((item) => {
            if (item) {
              return (
                <div key={Math.random()}>
                  <span className="dark:text-lightGray">•</span> {item}
                </div>
              )
            }
          })}
          <div className="absolute right-6 top-full mt-4 flex w-96 flex-row flex-wrap items-center justify-end gap-10 text-xs dark:text-lightGray">
            {technologies.map((item) => {
              return (
                <div
                  className="font-raulmono font-bold text-shadow-text"
                  key={item}
                >
                  {item}
                </div>
              )
            })}
            <div className="absolute right-0 top-10 flex flex-row gap-10 text-lg dark:text-lightGray">
              <a
                href={gitLink}
                className="mousehover opacity-90 transition-all duration-200 hover:scale-125 hover:cursor-pointer hover:opacity-100 active:scale-100"
              >
                <GitSvg />
              </a>
              <a
                href={projectUrl}
                className="mousehover opacity-90 transition-all duration-200 hover:scale-125 hover:cursor-pointer hover:opacity-100 active:scale-100"
              >
                <OpenSvg />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectShowcase
