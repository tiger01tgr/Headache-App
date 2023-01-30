import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { UserContext, UserContextType } from '../context/UserProvider';

// Displays a menu that allows the user to logout, go to settings (not implemented), and go to stats (not implemented)
const MyMenu: React.FC = () => {
  const [signOut] = useSignOut(auth);
  const router = useRouter();

  const { userData, clearUserContext } = React.useContext(
    UserContext
  ) as UserContextType;

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
  );
};

export default MyMenu;
