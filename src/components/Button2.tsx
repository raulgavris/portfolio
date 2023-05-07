const Button2 = ({ children, isActive }: Button2Props) => {
  return (
    <button
      className={`btn group flex items-center bg-transparent p-1 px-1 text-sm
              font-extralight tracking-widest dark:text-rgcolor2 dark:group-hover:text-rgcolor6`}
    >
      <span
        className={`${
          isActive ? 'dark:text-rgcolor6' : ''
        } relative mt-1 pb-1 pr-0 after:absolute after:bottom-0 after:left-0 after:block
                  after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-500
                  after:ease-out after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-100 dark:text-rgcolor2
                  dark:after:bg-rgcolor2 dark:group-hover:text-rgcolor6`}
      >
        {children}
      </span>
    </button>
  )
}

export default Button2
