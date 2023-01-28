import React from 'react'
import { VStack, Heading, Button, Text, Image, Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Divider } from '@chakra-ui/react'
import PersonalInfo from './PersonalInfo'


const Setting: React.FC = () => {

  return (
    <VStack
    justifyContent='start'
    height='100vh'
    width='100%'>
        <VStack
        bg='white'
        justifyContent='space-evenly'
        borderRadius='3xl'
        padding='5%'
        spacing={10}
        >   
            <Heading fontWeight='extrabold'>Settings</Heading>
                <VStack>
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem defaultChecked={true}>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Heading fontSize='md'>Personal Info</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <PersonalInfo />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                <Heading fontSize='md'>Preferences</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </VStack>
        </VStack>
  </VStack>
  )
}

export default Setting