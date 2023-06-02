interface SectionSlice {
  about: RefObject<HTMLDivElement>
  blog: RefObject<HTMLDivElement>
  contact: RefObject<HTMLDivElement>
  home: RefObject<HTMLDivElement>
  portfolio: RefObject<HTMLDivElement>
  container: RefObject<HTMLDivElement>
  active: string
}

interface SectionSliceState {
  SectionSlice: SectionSlice
}
