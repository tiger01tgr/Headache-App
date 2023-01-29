import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { useRouter } from 'next/navigation';
import { UserData } from '../../hooks/types';
import { UserContextType, UserContext } from '../context/UserProvider'


const MyMenu: React.FC = () => {

  const [ signOut ] = useSignOut(auth);
  const router = useRouter();

  const { userData, clearUserContext } = React.useContext(UserContext) as UserContextType;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {userData?.username}
        </MenuButton>
        <MenuList>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Stats</MenuItem>
            <MenuItem
              onClick={async () => {
                const success = await signOut();
                if (success) {
                    router.push('/');
                    clearUserContext();
                }
              }}
            >
              Logout
            </MenuItem>
        </MenuList>
    </Menu>
  )
}

export default MyMenu