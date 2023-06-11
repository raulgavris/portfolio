import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import BlogCard from '@/components/BlogCard'
import { ChevronSvg } from '@/components/Svg'
import { useWindowSize } from '@/lib/hooks/useWindowSize'

const BlogSection = ({ containerRef, blogRef }: BlogSectionProps) => {
  const router = useRouter()

  const [width] = useWindowSize()

  const [search, setSearch] = useState('')
  const [pageSelected, setPageSelected] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const [items, setItems] = useState([
    { id: 1, title: '12' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
    { id: 6, title: '6' },
    { id: 7, title: '7' },
    { id: 8, title: '8' },
    { id: 9, title: '9' },
  ])

  const results = !search
    ? items
    : items.filter((item) =>
        item.title.toLowerCase().includes(search.toLocaleLowerCase()),
      )

  const indexOfLastItem = pageSelected * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem)

  const maxPages = Math.ceil(items.length / itemsPerPage)

  const nextPage = () => {
    const isLastSlide = pageSelected === maxPages
    const newIndex = isLastSlide ? 1 : pageSelected + 1
    setPageSelected(newIndex)
  }

  const prevPage = () => {
    const isFirstSlide = pageSelected === 1
    const newIndex = isFirstSlide ? maxPages : pageSelected - 1

    setPageSelected(newIndex)
  }

  const goToSlide = (index) => {
    setPageSelected(index)
  }

  useEffect(() => {
    if (search && search !== '') {
      setPageSelected(1)
    }
  }, [search])

  useEffect(() => {
    const targetElement = document.getElementById('blog')
    if (targetElement) {
      if (router.route.includes(targetElement.id)) {
        containerRef.current.scrollTo({
          top: targetElement.offsetTop + 50,
          behavior: 'auto',
        })
      }
    }
  }, [containerRef, router.route])

  useEffect(() => {
    if (width < 640) {
      setItemsPerPage(3)
    } else {
      setItemsPerPage(6)
    }
  }, [indexOfFirstItem, indexOfLastItem, results, width])

  return (
    <div
      id="blog"
      className="h-full min-h-screen w-screen"
      ref={blogRef}
      data-path="/blog"
    >
      <div className="flex h-full flex-col items-center justify-center gap-10 sm:w-full sm:px-96 sm:py-24">
        <div className="flex h-full min-w-[1500px] flex-col flex-wrap items-center justify-center gap-10 sm:w-full sm:flex-row">
          {currentItems.map((item) => {
            return <BlogCard key={Math.random()} id={item.id} />
          })}
        </div>
        <div className="relative flex w-full flex-col items-center justify-center gap-0">
          <div className="mousehover relative flex min-w-[300px] flex-row items-center justify-center sm:mx-auto sm:w-1/3 sm:min-w-[350px]">
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
              className={`peer relative w-full rounded-md px-4 py-5 text-sm placeholder-transparent drop-shadow-basic placeholder:text-xs focus:outline-none focus:ring-opacity-75 dark:bg-darkGray`}
            />
            <label
              htmlFor="search"
              className="pointer-events-none absolute -top-7 left-2 w-full text-sm opacity-100 transition-all duration-500 text-shadow-text peer-placeholder-shown:left-4 peer-placeholder-shown:top-[22px] peer-placeholder-shown:font-raulmono peer-placeholder-shown:text-xs peer-placeholder-shown:text-lightGray peer-placeholder-shown:opacity-50"
            >
              Search blog post by title, tags or content
            </label>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center">
            <div className="flex h-full w-1/4 flex-row items-center justify-center gap-4 font-raulmono text-lightGray">
              <div
                onClick={() => prevPage()}
                className="mousehover transition-all duration-200 hover:scale-125 active:scale-100 dark:text-lightGray"
              >
                <ChevronSvg className="h-4 w-4 fill-lightGray" />
              </div>
              {Array(maxPages)
                .fill(null)
                .map((page, index) => {
                  return (
                    <div
                      onClick={() => goToSlide(index + 1)}
                      className={`${
                        index + 1 === pageSelected
                          ? 'underline opacity-100'
                          : 'opacity-50'
                      } mousehover transition-all duration-300 hover:cursor-pointer hover:underline hover:opacity-100`}
                      key={`${page}${Math.random()}`}
                    >
                      {index + 1}
                    </div>
                  )
                })}
              <div
                onClick={() => nextPage()}
                className="mousehover transition-all duration-200 hover:scale-125 active:scale-100 dark:text-lightGray"
              >
                <ChevronSvg className="h-4 w-4 rotate-180 fill-lightGray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogSection.displayName = 'blog'

export default BlogSection
