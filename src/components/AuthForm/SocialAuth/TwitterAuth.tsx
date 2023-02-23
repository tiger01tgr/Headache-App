import { Box, Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import { RiTwitterFill } from 'react-icons/ri';

interface Props { 
  w?: string[]
}

const TwitterAuth: React.FC<Props> = ({w}) => {
  return (
    <Box justifyContent='center'>
      <Button color='#1DA1F2' leftIcon={<RiTwitterFill />} w={w ? w : [null, '100%', null]} display={['none', 'flex', null, null]}>
          Sign in with Twitter
      </Button>
      <IconButton color='#1DA1F2' aria-label='Facebook Sign-in' icon={<RiTwitterFill />} display={['flex', 'none', null, null]}/>
    </Box>
  )
}

export default TwitterAuth