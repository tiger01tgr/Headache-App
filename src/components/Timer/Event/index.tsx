import {
  UserContext,
  UserContextType
} from '@/components/context/UserProvider';
import { Button, FormControl, Input, useToast, VStack } from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useContext } from 'react';
import ViewEvents from './ViewEvents';

// Log an event
const Event: React.FC = () => {
  const { userData, addEvent } = useContext(UserContext) as UserContextType;
  const toast = useToast();

  return (
    <VStack justifyContent="center">
      <Formik
        initialValues={{
          event: ''
        }}
        onSubmit={(values, { resetForm }) => {
          addEvent(values.event);
          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={2}>
              <FormControl>
                <Field
                  as={Input}
                  id="event"
                  name="event"
                  type="event"
                  placeholder="Enter an Event"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                onClick={() =>
                  toast({
                    title: `You've successfully logged an event.`,
                    status: 'success',
                    isClosable: true
                  })
                }
              >
                Log
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
      <ViewEvents events={userData?.activeSession?.events} />
    </VStack>
  );
};

export default Event;
