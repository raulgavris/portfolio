const Button1 = ({ children }: Button1Props) => {
  return (
    <button
      className={`relative h-10 w-28 text-center transition-all duration-500
              before:absolute before:left-0 before:top-0 before:h-full before:w-full before:opacity-10 before:transition-all
              before:duration-300 after:absolute after:left-0 after:top-0
              after:h-full after:w-full after:scale-125 after:border after:opacity-0 after:transition-all after:duration-300 before:hover:scale-50
              before:hover:opacity-0 after:hover:scale-100 after:hover:opacity-100 active:scale-110 dark:before:bg-rgcolor2 dark:after:border-rgcolor2`}
    >
      <span className="relative text-sm font-thin dark:text-rgcolor6">
        {children}
      </span>
    </button>
  )
}

export default Button1
