import { AppBar, Toolbar } from '@mui/material';
import { DrawerButton } from '@/DrawerButton';
import { ReactComponent as GithubLogo } from '@/assets/github.svg';
import Heading from '@/components/Heading';
import RouteNavLinkList from '@/components/RouteNavLinkList';
import style from './Home.module.scss';

function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <DrawerButton />
          <h2 className="header-title">Home</h2>
        </Toolbar>
      </AppBar>

      <main>
        <Heading
          title="React state management"
          icon={GithubLogo}
          iconColor="rgba(255, 255, 255, 0.4)"
          iconLink="https://github.com/junpei-8/react-state-managements"
        />
        <RouteNavLinkList className={style.list} />
      </main>
    </>
  );
}

export default Home;
