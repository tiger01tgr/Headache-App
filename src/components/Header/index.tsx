import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex
} from '@chakra-ui/react';
import React from 'react';
import MyMenu from '../Menu';

// Displays the header of the page
const Header: React.FC = () => {
  return (
    <Flex direction="row" justifyContent="space-between">
      <Breadcrumb>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <MyMenu />
    </Flex>
  );
};

export default Header;
