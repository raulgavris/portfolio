import { LeftArrowSvg } from '@/components/Svg'
import { useRouter } from 'next/router'

const BlogDetail = () => {
  const router = useRouter()

  const { id } = router.query

  console.log('blog', id)

  return (
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
      <button
        className="mousehover group flex flex-row items-center justify-start gap-2"
        onClick={() => {
          router.push('/blog')
        }}
      >
        <LeftArrowSvg className="fill-white transition-all duration-200 group-hover:-translate-x-1" />
        <span className="font-raulmono text-base">Go back to Blog.</span>
      </button>
    </div>
  )
}

BlogDetail.displayName = 'blogDetail'

export default BlogDetail
