import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { HStack, VStack, FormLabel, Input, Button, FormControl, InputGroup, InputRightElement, IconButton, Checkbox, Box, Heading, Image, Divider} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import React, { useState } from 'react'
import Forgot from './Forgot';
import SocialAuth from './SocialAuth';

const LoginBox = () => {

    const [ pShow, setPShow ] = useState(false);
    const handlePShowClick = () => setPShow(!pShow);

  return (
    <VStack
      justifyContent="space-evenly"
      borderRadius="3xl"
      padding="5%"
      spacing={5}
      w={['15em', 'sm']}
      >
      <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        // validate={validate}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start" padding={5} w={['300px', 'sm']}>
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <InputGroup size="md">
                    <Field
                        as={Input}
                        id="password"
                        name="password"
                        type={pShow ? 'text' : 'password'}
                        placeholder="Password"
                    />
                    <InputRightElement>
                        <IconButton
                        onClick={handlePShowClick}
                        aria-label="Visible Password"
                        icon={pShow ? <ViewIcon/> : <ViewOffIcon/>}
                        bg="white"
                        size="sm"
                        />
                    </InputRightElement>
                    </InputGroup>
                </FormControl>
                <HStack justifyContent="space-between" width="100%">
                    <Checkbox>Remember Me</Checkbox>
                    <Forgot />
                </HStack>
                <Button type="submit" colorScheme="blue" w='100%'>
                    Sign In
                </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </VStack>
  )
}

export default LoginBox