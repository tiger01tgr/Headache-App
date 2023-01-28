import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import { ButtonGroup, Editable, EditableInput, EditablePreview, Flex, HStack, IconButton, Input, useEditableControls, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const PersonalInfo = ()  => {
    /* Here's a custom control */
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm'>
          <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} aria-label="CheckIcon"/>
          <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} aria-label="CloseIcon"/>
        </ButtonGroup>
      ) : (
        <Flex justifyContent='center'>
          <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} aria-label="EditIcon"/>
        </Flex>
      )
    }
  
    return (
        <VStack>
            <HStack>
                <Text>First name: </Text>
                <Editable
                    textAlign='left'
                    defaultValue='name'
                    isPreviewFocusable={false}
                >
                    <HStack>
                    <EditablePreview />
                    {/* Here is the custom input */}
                    <Input as={EditableInput} />
                    <EditableControls />
                    </HStack>
                </Editable>
            </HStack>
            <Editable
                textAlign='left'
                defaultValue='name'
                isPreviewFocusable={false}
            >
                <EditablePreview />
                {/* Here is the custom input */}
                <Input as={EditableInput} />
                <EditableControls />
            </Editable>
        </VStack>
    )
}
export default PersonalInfo;