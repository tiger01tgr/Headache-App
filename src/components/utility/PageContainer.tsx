import { Flex } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Flex
      w={['100vw', null, null]}
      direction="inherit"
      position="relative"
      minH="100vh"
    >
      {children}
    </Flex>
  );
};

export default PageWrapper;
