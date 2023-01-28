import React from 'react'

import {
  Flex,
  Box
} from '@chakra-ui/react'


interface Props {
    children: React.ReactNode
}

const MobileLayout : React.FC<Props> = ({ children}) => {
  return (
    <Flex
      minH='100vh'
      direction='inherit'
      position='relative'
    >
      <Flex
        flex={1}
        direction='column'
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default MobileLayout