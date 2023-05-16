import DataRails from '@/components/Svg/datarails.svg'
import Esos from '@/components/Svg/esos-logo.svg'
import Tes from '@/components/Svg/tes.svg'
import Adva from '@/components/Svg/adva.svg'
import DevNest from '@/components/Svg/devnest.svg'
import Fitch from '@/components/Svg/fitch.svg'
import Ipost from '@/components/Svg/ipost.svg'
import Sphyce from '@/components/Svg/sphyce.svg'

const ClientsModal = ({ pageRef, setShowClients }) => {
  return (
    <>
      <button
        onClick={() => {
          setShowClients(false)
        }}
        className="absolute left-[70%] top-36 z-50 transition-all duration-200 hover:scale-150 hover:cursor-pointer active:scale-100"
      >
        X
      </button>
      <div
        ref={pageRef}
        className="absolute left-1/4 top-32 z-40 h-4/6 w-3/6 overflow-hidden rounded-md bg-white px-6 py-6 shadow-2xl drop-shadow-2xl scrollbar-hide xxs:overflow-y-scroll"
      >
        <div className="mt-6 flex flex-row flex-wrap items-stretch justify-center gap-3 xsm:gap-10">
          <a href="https://devnest.ro">
            <DevNest className="h-20 w-20 opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 xxs:m-0 xsm:h-40 xsm:w-56" />
          </a>
          <a href="https://www.fitchsolutions.com/">
            <Fitch className="h-20 w-20 opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 xxs:m-0 xsm:h-40 xsm:w-56" />
          </a>
          <a href="https://tes.com">
            <Tes className="h-20 w-20 opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 xxs:m-0 xsm:h-32 xsm:w-32" />
          </a>
          <a href="https://ipost.com">
            <Ipost className="h-20 w-20 opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 xxs:m-0 xsm:h-40 xsm:w-40" />
          </a>
          <a href="https://www.advasoftware.com/">
            <Adva className="h-20 w-20 opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 xxs:m-0 xsm:h-40 xsm:w-40" />
          </a>
          <a href="https://datarails.com">
            <DataRails className="h-20 w-20 opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 xxs:m-0 xsm:h-32 xsm:w-36" />
          </a>
          <a href="https://esos.ro">
            <Esos className="h-20 w-20 opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 xxs:m-0 xsm:h-28 xsm:w-40" />
          </a>
          <a href="https://www.spyhce.com/">
            <Sphyce className="h-20 w-20 opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 xxs:m-0 xsm:h-40 xsm:w-40" />
          </a>
        </div>
      </div>
    </>
  )
}

export default ClientsModal
