import { Container } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
  bg?: string;
}
// Container for pages
const PageContainer: React.FC<Props> = ({ children, bg }) => {
  return (
    <Container flex={1} display="flex" flexDirection="column" bg={bg} py={4}>
      {children}
    </Container>
  );
};

export default PageContainer;
