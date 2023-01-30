import { Inter } from '@next/font/google';
import Settings from '../components/Settings';
import PageContainer from '../components/utility/PageContainer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <PageContainer>
      <Settings />
    </PageContainer>
  );
}
