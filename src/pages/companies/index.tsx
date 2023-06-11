import ClientsModal from '@/components/ClientsModal'
import { LeftArrowSvg } from '@/components/Svg'
import { useRouter } from 'next/router'

const Companies = () => {
  const router = useRouter()

  return (
    <div className="h-screen w-screen">
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-6">
        <div className="max-w-[800px] text-center font-raulmono text-xl text-lightGray sm:text-3xl">
          I'm proud to have collaborated with some awesome companies:
        </div>
        <ClientsModal />
        <button
          className="mousehover group flex flex-row items-center justify-start gap-2"
          onClick={() => {
            router.push('/about')
          }}
        >
          <LeftArrowSvg className="fill-white transition-all duration-200 group-hover:-translate-x-1" />
          <span className="font-raulmono text-base">Go back to About me.</span>
        </button>
      </div>
    </div>
  )
}

Companies.displayName = 'companies'

export default Companies
