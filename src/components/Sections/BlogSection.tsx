import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const BlogSection = ({ containerRef, blogRef }: BlogSectionProps) => {
  const router = useRouter()

  useEffect(() => {
    const targetElement = document.getElementById('blog')
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
      id="blog"
      className="h-screen w-screen"
      ref={blogRef}
      data-path="/blog"
    >
      <div className="max-w-9xl grid h-full w-full grid-cols-12 grid-rows-12">
        <div className="relative col-start-2 col-end-11 row-start-3 row-end-12 ml-10">
          Raul
        </div>
        <div className="bottom-2 left-1/2 col-start-6 col-end-7 row-start-11 row-end-12 flex flex-row items-center justify-center gap-3"></div>
      </div>
    </div>
  )
}

BlogSection.displayName = 'blog'

export default BlogSection
