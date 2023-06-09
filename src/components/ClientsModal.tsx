import {
  AdvaSvg,
  DatarailsSvg,
  DevNestSvg,
  EsosSvg,
  FitchSvg,
  IpostSvg,
  SphyceSvg,
  TesSvg,
  SummerwoodSvg,
} from './Svg'

const ClientsModal = () => {
  return (
    <>
      <div className="z-40 h-3/6 w-3/6 overflow-hidden overflow-y-scroll rounded-md bg-white px-6 py-6 shadow-basic drop-shadow-basic scrollbar-hide">
        <div className="mt-6 grid grid-flow-row grid-cols-3 place-content-center place-items-center gap-0">
          <a href="https://devnest.ro">
            <DevNestSvg className="h-40 w-40 opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" />
          </a>
          <a href="https://www.fitchsolutions.com/">
            <FitchSvg className="h-40 w-40 opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" />
          </a>
          <a href="https://www.summerwood.com/">
            <SummerwoodSvg className="h-40 w-40 fill-softGreen opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" />
          </a>
          <a href="https://tes.com">
            <TesSvg className="h-40 w-40 opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" />
          </a>
          <a href="https://ipost.com">
            <IpostSvg className="h-40 w-40 opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" />
          </a>
          <a href="https://www.advasoftware.com/">
            <AdvaSvg className="h-40 w-40 opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" />
          </a>
          <a href="https://datarails.com">
            <DatarailsSvg className="h-40 w-40 opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" />
          </a>
          <a href="https://esos.ro">
            <EsosSvg className="h-40 w-40 opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" />
          </a>
          <a href="https://www.spyhce.com/">
            <SphyceSvg className="h-40 w-40 opacity-80 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" />
          </a>
        </div>
      </div>
    </>
  )
}

export default ClientsModal
