import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

import React from 'react'

const Forgot = () => {
  return (
    <Link as={NextLink} href='/forgot'>
        Forgot?
    </Link>
  )
}

export default Forgot