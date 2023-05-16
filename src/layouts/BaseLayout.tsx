import React from 'react'
import { useTheme } from 'next-themes'
import Navigation from '@/components/Navigation'
import IonIcon from '@reacticons/ionicons'

export interface BaseLayoutProps {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  type IconType =
    | 'logo-linkedin'
    | 'logo-github'
    | 'logo-instagram'
    | 'logo-facebook'

  const SocialMediaIcons = ({ className }) => (
    <div className={className}>
      {[
        {
          href: 'https://www.linkedin.com/in/rg-raul-gavris/',
          icon: 'logo-linkedin',
        },
        { href: 'https://github.com/raulgavris', icon: 'logo-github' },
        {
          href: 'https://www.instagram.com/raul_gavris/',
          icon: 'logo-instagram',
        },
        {
          href: 'https://www.facebook.com/rg.raulgavris/',
          icon: 'logo-facebook',
        },
      ].map(({ href, icon }: { href: string; icon: IconType }) => (
        <span
          key={icon}
          className=" mousehover transition-all duration-200 hover:translate-x-1 hover:rotate-3 hover:scale-110 dark:hover:text-teal"
        >
          <a href={href}>
            <IonIcon name={icon}></IonIcon>
          </a>
        </span>
      ))}
    </div>
  )

  return (
    <>
      <div className="relative m-0 h-full w-full overflow-y-scroll border-0 p-0">
        {/* <button
          onClick={() =>
            theme == 'dark' ? setTheme('light') : setTheme('dark')
          }
          className="absolute  bottom-32 rounded-lg bg-gray-800 px-8 py-2 text-2xl text-white transition-all duration-100 hover:bg-gray-600 dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300 md:text-4xl"
        >
          Toggle Mode
        </button> */}
        <Navigation />
        {children}
        <div className="fixed bottom-0 right-0 z-10 max-w-[1500px]">
          <span className="mousehover absolute bottom-0 right-10 block h-28 w-0.5 dark:bg-lightGray sm:right-40">
            <span className="absolute -right-[113px] bottom-56 rotate-90 font-raulmono text-[16px] font-bold leading-[24px] transition-all duration-200 hover:-translate-y-2 dark:text-lightGray dark:hover:text-teal">
              <a href="mailto:rg.raulgavris@gmail.com">
                rg.raulgavris@gmail.com
              </a>
            </span>
          </span>
          <span className="absolute bottom-0 right-20 block h-28 w-0.5 dark:bg-lightGray">
            <SocialMediaIcons className="absolute bottom-[116px] right-[-10px] flex flex-col gap-[34px] text-2xl dark:text-lightGray" />
          </span>
        </div>
      </div>
    </>
  )
}
