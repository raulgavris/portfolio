import Button1 from '@/components/Button1'
import { LeftArrowSvg, LikesSvg, ViewsSvg } from '@/components/Svg'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const BlogDetail = () => {
  const router = useRouter()

  const { id } = router.query

  const [email, setEmail] = useState('')

  useEffect(() => {
    if (parseInt(id as string) <= 0 || parseInt(id as string) >= 7) {
      router.push('/blog')
    }
  }, [id, router])

  return parseInt(id as string) >= 1 || parseInt(id as string) <= 6 ? (
    <div className="relative flex h-full min-h-screen w-screen flex-col items-center justify-start gap-4 overflow-y-scroll py-32">
      <div className="flex flex-row items-center justify-center gap-10 font-raulmono text-4xl font-bold text-lightGray">
        <div className="relative">Blog Title {id}</div>
      </div>
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="relative flex flex-row items-center justify-center gap-2 bg-lightGray px-1 py-0 font-raulmono text-xl text-darkGray">
          <div className="text-darkGray">THURSDAY. APRIL 07, 2023</div>
        </div>
        <div className="relative flex flex-row items-center justify-center gap-2 p-1 font-raulmono text-xl text-offWhite">
          <div>-</div>
          <div>10 MINS</div>
          <div className="font-bold">RAUL GAVRIȘ</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-2">
        <div className="relative flex max-w-[500px] flex-row flex-wrap items-center justify-center gap-2 py-0 font-raulmono text-xl text-darkGray">
          <div className="bg-lightGray px-4">GIT</div>
          <div className="bg-lightGray px-4">WEB</div>
          <div className="bg-lightGray px-4">FE</div>
          <div className="bg-lightGray px-4">BE</div>
        </div>
      </div>
      <div className="max-w-[700px] text-justify text-base leading-[19px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi
        urna, convallis vel euismod ac, malesuada id tortor. Sed ac euismod
        libero. Donec imperdiet maximus orci, vitae cursus lacus auctor eu.
        Pellentesque tristique nisl sed condimentum feugiat. Sed mollis orci
        quis tristique tempus. Donec vestibulum libero ac felis elementum
        luctus. Nam blandit dictum turpis sed finibus. Nulla dapibus mattis
        orci, sit amet pellentesque purus imperdiet eget. Suspendisse
        scelerisque eros nec justo tempus efficitur. Nulla ac lorem purus. Proin
        porta pharetra tristique. Vestibulum auctor efficitur ante nec
        elementum. Morbi sit amet vestibulum ipsum. Duis nec tortor vulputate,
        molestie dolor sit amet, posuere lorem. Nam vel maximus ex, pharetra
        fermentum augue. Quisque id sollicitudin enim.
      </div>
      <div className="flex w-full max-w-[700px] flex-row items-start justify-start text-2xl font-bold text-lightGray">
        HEADER 1
      </div>
      <div className="max-w-[700px] text-justify text-base leading-[19px]">
        Vivamus accumsan ultrices sapien egestas ultricies. Nullam mattis,
        lectus nec rutrum interdum, neque ante commodo mauris, condimentum
        maximus mauris velit nec sapien. Aenean a metus sollicitudin, volutpat
        est eget, cursus orci. Vivamus et ante a velit porta eleifend. Sed
        laoreet nisi quis magna ornare iaculis. Morbi in massa ut libero tempor
        aliquet. Quisque a porta massa, vel condimentum augue. Fusce sit amet
        lorem non augue feugiat sagittis ac dictum metus. Nunc eu purus
        condimentum, ullamcorper ipsum ac, pellentesque diam. Nulla semper justo
        id nisl luctus condimentum. Cras fringilla tincidunt tempor. Fusce
        tristique ex nisi, vitae ultrices dui vestibulum nec. Donec sed ligula
        eu ligula lacinia efficitur eu at velit. Proin mattis non dui ut
        dignissim.
      </div>
      <div className="flex w-full max-w-[700px] flex-row items-start justify-start text-2xl font-bold text-lightGray">
        HEADER 2
      </div>
      <div className="max-w-[700px] text-justify text-base leading-[19px]">
        Vivamus accumsan ultrices sapien egestas ultricies. Nullam mattis,
        lectus nec rutrum interdum, neque ante commodo mauris, condimentum
        maximus mauris velit nec sapien. Aenean a metus sollicitudin, volutpat
        est eget, cursus orci. Vivamus et ante a velit porta eleifend. Sed
        laoreet nisi quis magna ornare iaculis. Morbi in massa ut libero tempor
        aliquet. Quisque a porta massa, vel condimentum augue. Fusce sit amet
        lorem non augue feugiat sagittis ac dictum metus. Nunc eu purus
        condimentum, ullamcorper ipsum ac, pellentesque diam. Nulla semper justo
        id nisl luctus condimentum. Cras fringilla tincidunt tempor. Fusce
        tristique ex nisi, vitae ultrices dui vestibulum nec. Donec sed ligula
        eu ligula lacinia efficitur eu at velit. Proin mattis non dui ut
        dignissim.
      </div>
      <div className="flex w-full max-w-[700px] flex-row items-start justify-start text-2xl font-bold text-lightGray">
        HEADER 3
      </div>
      <div className="max-w-[700px] text-justify text-base leading-[19px]">
        Vivamus accumsan ultrices sapien egestas ultricies. Nullam mattis,
        lectus nec rutrum interdum, neque ante commodo mauris, condimentum
        maximus mauris velit nec sapien. Aenean a metus sollicitudin, volutpat
        est eget, cursus orci. Vivamus et ante a velit porta eleifend. Sed
        laoreet nisi quis magna ornare iaculis. Morbi in massa ut libero tempor
        aliquet. Quisque a porta massa, vel condimentum augue. Fusce sit amet
        lorem non augue feugiat sagittis ac dictum metus. Nunc eu purus
        condimentum, ullamcorper ipsum ac, pellentesque diam. Nulla semper justo
        id nisl luctus condimentum. Cras fringilla tincidunt tempor. Fusce
        tristique ex nisi, vitae ultrices dui vestibulum nec. Donec sed ligula
        eu ligula lacinia efficitur eu at velit. Proin mattis non dui ut
        dignissim.
      </div>
      <div className="flex w-full max-w-[700px] flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-4 text-xl text-lightGray">
          <div>That's all,</div>
          <div>Raul</div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex w-24 flex-row items-center justify-start gap-2">
            <ViewsSvg className="mb-1 h-3.5 w-3.5 fill-softOrange" />
            <div className="text-xs text-lightGray">views:</div>
            <div className="text-xs text-red">26</div>
          </div>
          <div className="mt-1 flex w-24 flex-row items-center justify-start gap-2">
            <LikesSvg className="mb-1 h-3.5 w-3.5 fill-softGreen" />
            <div className="text-xs tracking-[1px] text-lightGray">likes:</div>
            <div className="text-xs text-red">18</div>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-[700px] flex-row items-center justify-between">
        <div
          onClick={() => {
            router.push(`/blog/${parseInt(id as string) - 1}`)
          }}
          className="mousehover group flex flex-row items-center justify-center gap-2 hover:cursor-pointer"
        >
          {!(parseInt(id as string) <= 1) && (
            <>
              <LeftArrowSvg className="fill-white transition-all duration-200 group-hover:-translate-x-1" />
              <button className="text-xl text-lightGray">
                Blog Title {parseInt(id as string) - 1}
              </button>
            </>
          )}
        </div>
        <div
          onClick={() => {
            router.push(`/blog/${parseInt(id as string) + 1}`)
          }}
          className="mousehover group flex flex-row items-center justify-center gap-2 hover:cursor-pointer"
        >
          {!(parseInt(id as string) >= 6) && (
            <>
              <button className="text-xl text-lightGray">
                Blog Title {parseInt(id as string) + 1}
              </button>
              <LeftArrowSvg className="rotate-180 fill-white transition-all duration-200 group-hover:translate-x-1" />
            </>
          )}
        </div>
      </div>
      <div className="flex max-w-[500px] flex-col items-center justify-center gap-8">
        <div className="font-raulmono text-xs text-lightGray">
          Subscribe to my mailing list to get the latest blog posts
        </div>
        <div className="mousehover relative mx-auto flex min-w-[350px] flex-row items-center justify-center gap-4">
          <input
            maxLength={50}
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            id="email"
            name="email"
            type="text"
            placeholder="Email Address"
            className={`peer relative w-full rounded-md px-4 py-3 text-sm placeholder-transparent drop-shadow-basic placeholder:text-xs focus:outline-none focus:ring-opacity-75 dark:bg-darkGray`}
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute -top-7 left-2 w-full text-sm opacity-100 transition-all duration-500 text-shadow-text peer-placeholder-shown:left-4 peer-placeholder-shown:top-[14px] peer-placeholder-shown:font-raulmono peer-placeholder-shown:text-xs peer-placeholder-shown:text-lightGray peer-placeholder-shown:opacity-50"
          >
            Email Address
          </label>
          <div className="mousehover">
            <Button1>Subscribe</Button1>
          </div>
        </div>
      </div>
      <button
        className="mousehover group flex flex-row items-center justify-start gap-2"
        onClick={() => {
          router.push('/blog')
        }}
      >
        <LeftArrowSvg className="fill-white transition-all duration-200 group-hover:-translate-x-1" />
        <span className="font-raulmono text-base">Go back to Blog.</span>
      </button>
      <div className="flex w-full max-w-[700px] flex-row items-start justify-start text-xl text-lightGray">
        Comments:
      </div>
    </div>
  ) : (
    <></>
  )
}

BlogDetail.displayName = 'blogDetail'

export default BlogDetail
