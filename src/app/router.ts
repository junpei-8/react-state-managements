import HomeIcon from '@mui/icons-material/Home';
import { lazy } from 'react';
import { ReactComponent as ReduxIcon } from './assets/redux.svg';
import Home from './screens/home/Home';

type Routes = {
  path: string;
  name: string;
  component: React.FunctionComponent;
  icon: React.FunctionComponent;
}[];

export const routes: Routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    icon: HomeIcon,
  },
  {
    path: '/redux',
    name: 'Redux',
    component: lazy(() => import('./screens/redux/ReduxApp')),
    icon: ReduxIcon,
  },
];
