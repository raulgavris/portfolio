import { useRouter } from 'next/router'
import { LikesSvg, ViewsSvg } from './Svg'

const BlogCard = ({ id }) => {
  const router = useRouter()

  return (
    <div
      onClick={() => {
        router.push(`/blog/${id}`)
      }}
      className="mousehover flex h-[200px] w-[500px] flex-col items-start justify-between rounded-xl bg-darkGray px-6 py-4 drop-shadow-basic hover:cursor-pointer"
    >
      <div className="flex w-full flex-row items-center justify-between">
        <div className="font-raulmono text-3xl text-lightGray">
          Blog Title {id}
        </div>
        <div className="font-raulmono text-xs text-lightGray">5 mins read</div>
      </div>
      <div className="w-10/12 text-xs text-offWhite">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum,
        tortor ac ultrices malesuada, metus libero bibendum justo, non finibus
        tortor turpis id tortor. Mauris quis ex ut velit commodo scelerisque . .
        .
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start">
          <div className="flex w-24 flex-row items-center justify-start gap-2">
            <div className="text-xs text-lightGray">views:</div>
            <div className="text-xs text-red">26</div>
            <ViewsSvg className="mb-1 h-3.5 w-3.5 fill-softOrange" />
          </div>
          <div className="mt-1 flex w-24 flex-row items-center justify-start gap-2">
            <div className="text-xs tracking-[1px] text-lightGray">likes:</div>
            <div className="text-xs text-red">18</div>
            <LikesSvg className="mb-1 h-3.5 w-3.5 fill-softGreen" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2">
          <div className="flex h-7 w-10 flex-row items-center justify-center rounded-sm bg-teal font-raulmono text-xs text-offWhite drop-shadow-basic">
            git
          </div>
          <div className="flex h-7 w-10 flex-row items-center justify-center rounded-sm bg-darkBlack font-raulmono text-xs text-offWhite drop-shadow-basic">
            web
          </div>
          <div className="flex h-7 w-10 flex-row items-center justify-center rounded-sm bg-softOrange font-raulmono text-xs text-offWhite drop-shadow-basic">
            FE
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-1">
          <div className="flex flex-col items-end justify-end">
            <div className="font-raulmono text-xs text-lightGray">
              Raul Gavriș
            </div>
            <div className="font-raulmono text-xs text-teal">
              06-04-2023 22:24
            </div>
          </div>
          <img
            alt="blog_image"
            src="/hero-large.png"
            className="m-0 h-10 w-10 rounded-full p-0 shadow-inner drop-shadow-basic"
          />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
