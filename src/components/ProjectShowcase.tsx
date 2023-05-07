import IonIcon from '@reacticons/ionicons'

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
        <div className="absolute left-16 top-[8%] text-xl dark:text-rgcolor6">
          {projectName}
        </div>
        <div className="absolute left-16 top-[15%] h-4/6 w-1/2 rounded shadow drop-shadow dark:bg-rgcolor6">
          <a className="mousehover h-full w-full" href={projectUrl}>
            <img
              alt="imageshowcase"
              className="h-full w-full rounded grayscale transition-all duration-200 hover:grayscale-0"
              src={imageUrl}
            />
          </a>
        </div>
        <div className="absolute right-16 top-[30%] h-auto w-1/2 rounded p-10 text-sm shadow drop-shadow dark:bg-rgcolor3 dark:text-rgcolor6">
          {newDescription.map((item) => {
            if (item) {
              return (
                <div key={Math.random()}>
                  <span className="dark:text-rgcolor2">•</span> {item}
                </div>
              )
            }
          })}
          <div className="absolute right-16 top-[105%] flex flex-row space-x-10 text-xs dark:text-rgcolor2">
            {technologies.map((item) => {
              return <div key={item}>{item}</div>
            })}
          </div>
          <div className="absolute right-16 top-[120%] flex flex-row space-x-10 text-lg dark:text-rgcolor2">
            <a
              href={gitLink}
              className="mousehover opacity-90 transition-all duration-200 hover:scale-125 hover:cursor-pointer hover:opacity-100 active:scale-100"
            >
              <IonIcon name="git-branch-outline"></IonIcon>
            </a>
            <a
              href={projectUrl}
              className="mousehover opacity-90 transition-all duration-200 hover:scale-125 hover:cursor-pointer hover:opacity-100 active:scale-100"
            >
              <IonIcon name="open-outline"></IonIcon>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectShowcase
