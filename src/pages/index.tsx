import dynamic from 'next/dynamic'

const SinglePageApp = dynamic(() => import('../components/SinglePageApp'), {
  ssr: false,
})

const Index: React.FC = () => {
  return <SinglePageApp />
}

export default Index
