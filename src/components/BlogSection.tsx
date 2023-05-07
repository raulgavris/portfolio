import React, { RefObject, useEffect } from 'react'
import { SectionElement } from '@/lib/hooks/useScrollSpy'
import { useRouter } from 'next/router'

interface BlogSectionProps {
  containerRef: RefObject<HTMLDivElement>
  blogRef: RefObject<SectionElement>
}

const BlogSection = React.forwardRef<SectionElement, BlogSectionProps>(
  ({ containerRef, blogRef }) => {
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
    }, [])

    return (
      <div
        id="blog"
        className="h-screen w-screen snap-start"
        ref={blogRef}
        data-path="/blog"
      >
        Blog
      </div>
    )
  },
)

BlogSection.displayName = 'blog'

export default BlogSection
