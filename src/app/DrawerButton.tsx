import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useDrawer } from './Drawer';

export function DrawerButton() {
  const [hasOpened, setHasOpened] = useDrawer();

  const toggle = () => setHasOpened(!hasOpened);

  return (
    <div>
      <IconButton color="primary" aria-label="Open drawer" onClick={toggle}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
