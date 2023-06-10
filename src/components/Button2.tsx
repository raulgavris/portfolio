const Button2 = ({ children, active }: Button2Props) => {
  let newActive: string
  if (active) {
    newActive = active.replace('/', '')
  }
  const newChildren = children.toString().toLowerCase()

  return (
    <button
      className={`btn mousehover group flex items-center bg-transparent p-1 px-1
              text-base font-extralight tracking-widest dark:text-lightGray dark:group-hover:text-offWhite`}
    >
      <span
        className={`${
          active && newActive === newChildren
            ? 'underline dark:text-offWhite'
            : ''
        } relative mt-1 pb-1 pr-0 after:absolute after:bottom-0 after:left-0 after:block
                  after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-500
                  after:ease-out after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-100 dark:text-lightGray
                  dark:after:bg-lightGray dark:group-hover:text-offWhite`}
      >
        {children}
      </span>
    </button>
  )
}

export default Button2
