import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Button2 from './Button2'
import Button1 from './Button1'
import Hamburger from './Hamburger'
import { useWindowSize } from '@/lib/hooks/useWindowSize'
import { SunSvg, MoonSvg } from '@/components/Svg'

const Navigation = () => {
  const [pathname, setPathname] = useState('')

  const [showNavigation, setShowNavigation] = useState(false)

  const [width] = useWindowSize()

  useEffect(() => {
    if (width > 770) {
      setShowNavigation(false)
    }
  }, [width])

  useEffect(() => {
    // Get the current pathname
    console.log('window', window.location.pathname)
    setPathname(window.location.pathname)

    // If you want to keep track of the pathname if it changes, you can add a listener here
    const handleLocationChange = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)

    // Don't forget to clean up your effect by removing the listener
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [pathname])

  return width > 770 ? (
    <div className="relative z-20 mx-auto flex h-24 max-w-[1500px] flex-row items-center justify-between px-1 dark:bg-darkBlack md:px-20">
      <div className="item-center flex flex-row items-center justify-center gap-4">
        <div
          className="mousehover group relative h-14 w-14 active:scale-110 dark:text-lightGray dark:hover:text-offWhite"
          // onClick={handleChangeDimension}
        >
          <span className="pointer-events-none absolute left-[25px] top-[18px] text-[25px] leading-[29px] text-red transition-all duration-500 text-shadow-text group-hover:text-offWhite">
            R
          </span>
          <div className="absolute left-[16px] top-[14px] h-[50px] w-[50px] border-[2px] border-lightGray transition-all duration-500 group-hover:rounded-[15px] group-hover:border-[1px] group-hover:border-red"></div>
          <div className="absolute top-[8px] h-[50px] w-[50px] border-[2px] border-lightGray transition-all duration-500 group-hover:rounded-[15px] group-hover:border-[1px] group-hover:border-red"></div>
          <div className="absolute left-[10px] h-[50px] w-[50px] border-[2px] border-lightGray transition-all duration-500 group-hover:rounded-[15px] group-hover:border-[1px] group-hover:border-red"></div>
        </div>
        <div
          className="mousehover ml-4 mt-2 text-2xl transition-all duration-200 hover:-rotate-6 hover:skew-x-3 hover:scale-110 active:scale-95  dark:text-lightGray"
          // onClick={handleThemeSwitch}
        >
          <SunSvg className="h-7 w-7 fill-lightGray" />
        </div>
      </div>

      <div className="flex flex-row gap-10">
        <Link href="/about">
          <Button2>About</Button2>
        </Link>
        <Link href="/portfolio">
          <Button2>Portfolio</Button2>
        </Link>
        <Link href="/blog">
          <Button2>Blog</Button2>
        </Link>
        <Link href="/contact">
          <Button2>Contact</Button2>
        </Link>
        <div className="mousehover">
          <Button1>RESUME</Button1>
        </div>
      </div>
    </div>
  ) : (
    <>
      {!showNavigation && (
        <Hamburger setShowNavigation={setShowNavigation} value={true} />
      )}
      {showNavigation && (
        <>
          <div className="absolute right-0 z-[99] h-screen w-3/6 shadow dark:bg-darkGray sm:w-2/6">
            <Hamburger setShowNavigation={setShowNavigation} value={false} />
            <div className="item-center items-left mt-32 flex flex-row justify-center gap-4">
              <div
                className="mousehover group relative h-14 w-14 active:scale-110 dark:text-lightGray dark:hover:text-offWhite"
                // onClick={handleChangeDimension}
              >
                <span className="pointer-events-none absolute left-[25px] top-[18px] text-[25px] leading-[29px] text-red transition-all duration-500 text-shadow-text group-hover:text-offWhite">
                  R
                </span>
                <div className="absolute left-[16px] top-[14px] h-[50px] w-[50px] border-[2px] border-lightGray transition-all duration-500 group-hover:rounded-[15px] group-hover:border-[1px] group-hover:border-red"></div>
                <div className="absolute top-[8px] h-[50px] w-[50px] border-[2px] border-lightGray transition-all duration-500 group-hover:rounded-[15px] group-hover:border-[1px] group-hover:border-red"></div>
                <div className="absolute left-[10px] h-[50px] w-[50px] border-[2px] border-lightGray transition-all duration-500 group-hover:rounded-[15px] group-hover:border-[1px] group-hover:border-red"></div>
              </div>
              <div
                className="mousehover text-2xl transition-all duration-200 hover:-rotate-6 hover:skew-x-3 hover:scale-110 active:scale-95  dark:text-lightGray"
                // onClick={handleThemeSwitch}
              >
                <SunSvg className="h-7 w-7 fill-lightGray" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-10 p-10">
              <Link href="/contact">
                <Button2>About</Button2>
              </Link>
              <Link href="/portfolio">
                <Button2>Portfolio</Button2>
              </Link>
              <Link href="/blog">
                <Button2>Blog</Button2>
              </Link>
              <Link href="/contact">
                <Button2>Contact</Button2>
              </Link>
              <div>
                <Button1>RESUME</Button1>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navigation
