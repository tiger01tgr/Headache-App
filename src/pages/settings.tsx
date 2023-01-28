import PageContainer from '../components/utility/PageContainer'
import Settings from '../components/Settings'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageContainer>
      <Settings />
    </PageContainer>
  )
}
