import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import BlogCard from '@/components/BlogCard'

const BlogSection = ({ containerRef, blogRef }: BlogSectionProps) => {
  const router = useRouter()

  const [search, setSearch] = useState('')

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
      <div className="max-w-9xl flex h-full w-full flex-col items-center justify-center px-80 py-40">
        <div className="grid h-full w-full grid-flow-col grid-cols-2 grid-rows-3 gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="mousehover relative mt-16 flex w-1/2 flex-row items-center justify-center">
          <input
            maxLength={50}
            required
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            id="search"
            name="search"
            type="text"
            placeholder="Search blog post by title, tags or content"
            className={`peer relative w-full rounded-md px-3 py-4 text-sm placeholder-transparent drop-shadow-basic placeholder:text-xs focus:outline-none focus:ring-opacity-75 dark:bg-darkGray`}
          />
          <label
            htmlFor="name"
            className="pointer-events-none absolute -top-7 left-2 w-full text-sm opacity-100 transition-all duration-500 text-shadow-text peer-placeholder-shown:left-10 peer-placeholder-shown:top-2.5 peer-placeholder-shown:font-raulmono peer-placeholder-shown:text-xs peer-placeholder-shown:opacity-50"
          >
            Search blog post by title, tags or content
          </label>
        </div>
      </div>
    </div>
  )
}

BlogSection.displayName = 'blog'

export default BlogSection
