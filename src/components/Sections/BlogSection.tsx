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
      Blog
    </div>
  )
}

BlogSection.displayName = 'blog'

export default BlogSection
