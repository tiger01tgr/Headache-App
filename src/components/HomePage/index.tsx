import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../Header'
import Tracker from '../Tracker'
import useAuth from '../../hooks/useAuth'
import { auth } from '../../firebase/clientApp'
import FinishSetUp from '../FinishSetUp'
import Timer from '../Timer'

const HomePage = () => {

  return (
    <Box>
      <Header/>
      <Timer active={false}/>
      <Tracker />
    </Box>
  )
}

export default HomePage