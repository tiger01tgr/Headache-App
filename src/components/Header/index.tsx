import { Flex } from '@chakra-ui/react'
import React from 'react'
import MyMenu from '../Menu'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { UserData } from '../../hooks/types'

const Header: React.FC = () => {

  return (
    <Flex direction='row' justifyContent='space-between'>  
        <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <MyMenu/>
    </Flex>
  )
}

export default Header