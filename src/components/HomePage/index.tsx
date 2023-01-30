import { Box } from '@chakra-ui/react';
import Header from '../Header';
import Timer from '../Timer';
import Tracker from '../Tracker';

// Displays the home page
const HomePage = () => {
  return (
    <Box>
      <Header />
      <Timer active={false} />
      <Tracker />
    </Box>
  );
};

export default HomePage;
