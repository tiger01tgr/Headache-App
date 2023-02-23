import { VStack } from '@chakra-ui/react';
import Header from '../Header';
import Timer from '../Timer';
import Tracker from '../Tracker';

// Displays the home page
const HomePage = () => {
  return (
    <VStack>
      <Header />
      <Timer />
      <Tracker />
    </VStack>
  );
};

export default HomePage;
