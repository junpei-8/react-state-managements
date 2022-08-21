import HomeIcon from '@mui/icons-material/Home';
import { lazy } from 'react';
import { ReactComponent as MobXLogo } from './assets/mobx.svg';
import { ReactComponent as ReduxLogo } from './assets/redux.svg';
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
    icon: ReduxLogo,
  },
  {
    path: '/rtk',
    name: 'RTK',
    component: lazy(() => import('./screens/rtk/RTKApp')),
    icon: ReduxLogo,
  },
  // {
  //   path: '/recoil',
  //   name: 'Recoil',
  //   component: lazy(() => import('./screens/recoil/RecoilApp')),
  //   icon: RecoilLogo
  // }
  // {
  //   path: '/mobx',
  //   name: 'MobX',
  //   component: lazy(() => import('./screens/mobx/MobXApp')),
  //   icon: MobXLogo,
  // }
];
