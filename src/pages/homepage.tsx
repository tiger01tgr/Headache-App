import PageContainer from '../components/utility/PageContainer'
import HomePage from '../components/HomePage'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <PageContainer>
      <HomePage />
    </PageContainer>
  )
}
