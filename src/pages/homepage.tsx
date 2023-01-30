import { Inter } from '@next/font/google';
import HomePage from '../components/HomePage';
import PageContainer from '../components/utility/PageContainer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <PageContainer>
      <HomePage />
    </PageContainer>
  );
}
