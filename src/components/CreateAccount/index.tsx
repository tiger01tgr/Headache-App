import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Heading,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  InputGroup,
  InputRightElement,
  IconButton
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface Values {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    pconfirm: string,
    rememberMe: boolean
}


// https://chakra-ui.com/getting-started/with-formik

const CreateAccount = () => {

    const [pShow, setPShow] = useState(false)
    const handlePShowClick = () => setPShow(!pShow)
    const [cShow, setCShow] = useState(false)
    const handleCShowClick = () => setCShow(!cShow)

    const validate = () => {

    }

    return (
    <VStack justifyContent="center" h="100vh">
        <Heading>Create an Account</Heading>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            pconfirm: '',
            rememberMe: false
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
          validate={validate}
        >
            {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start" padding={10}>
                    <HStack>
                        <FormControl>
                            <FormLabel htmlFor="firstName">First name</FormLabel>
                            <Field
                            as={Input}
                            id="firstName"
                            name="firstName"
                            type="firstName"
                            placeholder='First name'
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="lastName">Last name</FormLabel>
                            <Field
                            as={Input}
                            id="lastName"
                            name="lastName"
                            type="lastName"
                            placeholder='Last name'
                            />
                        </FormControl>
                    </HStack>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <InputGroup size='md'>
                            <Field
                            as={Input}
                            id="password"
                            name="password"
                            type={pShow ? 'text' : 'password'}
                            placeholder='Password'
                            />
                            <InputRightElement >
                            <IconButton onClick={handlePShowClick} 
                                aria-label='Visible Password' 
                                icon={pShow ? <ViewIcon /> : <ViewOffIcon />} 
                                bg='white' size='sm'/>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="pconfirm">Confirm</FormLabel>
                        <InputGroup size='md'>
                            <Field
                            as={Input}
                            id="pconfirm"
                            name="pconfirm"
                            type={cShow ? 'text' : 'password'}
                            placeholder='Confirm'
                            />
                            <InputRightElement >
                            <IconButton onClick={handleCShowClick} 
                                aria-label='Visible Password' 
                                icon={cShow ? <ViewIcon /> : <ViewOffIcon />} 
                                bg='white' size='sm'/>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Field
                        as={Checkbox}
                        id="rememberMe"
                        name="rememberMe"
                        colorScheme="teal"
                    >
                    Remember me?
                    </Field>
                <Button type="submit" colorScheme="teal" width="full">
                    Login
                </Button>
                </VStack>
            </form>
            )}
        </Formik>
    </VStack>
    )
}

export default CreateAccount

