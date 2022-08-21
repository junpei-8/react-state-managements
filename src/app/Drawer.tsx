import { Divider, SwipeableDrawer } from '@mui/material';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import style from './Drawer.module.scss';
import RouteNavLinkList from './components/RouteNavLinkList';

export const DrawerContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>(null!);

export function useDrawer() {
  return useContext(DrawerContext);
}

export function DrawerProvider({ children }: PropsWithChildren) {
  return <DrawerContext.Provider value={useState(false)} children={children} />;
}

function Drawer() {
  const [hasOpened, setHasOpened] = useDrawer();

  const open = () => setHasOpened(true);
  const close = () => setHasOpened(false);

  return (
    <SwipeableDrawer anchor="left" open={hasOpened} onOpen={open} onClose={close}>
      <div className={style.body}>
        <h2 className={style.heading}>React state managements</h2>

        <Divider />

        <div onClick={close}>
          <RouteNavLinkList></RouteNavLinkList>
        </div>
      </div>
    </SwipeableDrawer>
  );
}

export default Drawer;
