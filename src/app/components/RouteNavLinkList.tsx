import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '@/router';
import style from './RouteNavLinkList.module.scss';

function RouteNavLinkList({ className }: { className?: string }) {
  const location = useLocation();

  return (
    <MenuList className={className}>
      {routes.map((route) => (
        <Link to={route.path} key={route.path}>
          <MenuItem selected={location.pathname.includes(route.path)}>
            <ListItemIcon className={style.icon}>
              <route.icon />
            </ListItemIcon>
            <ListItemText>{route.name}</ListItemText>
          </MenuItem>
        </Link>
      ))}
    </MenuList>
  );
}

export default RouteNavLinkList;
