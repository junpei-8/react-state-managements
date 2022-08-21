import { AppBar, Toolbar } from '@mui/material';
import { Provider, useSelector } from 'react-redux';
import { DrawerButton } from '@/DrawerButton';
import { ReactComponent as MobXLogo } from '@/assets/mobx.svg';
import Heading from '@/components/Heading';
import PageFlow from '@/components/PageFlow';
import PageRoutes from '@/components/PageRoutes';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import store from './store';
import { State } from './store';

const TITLE = 'MobX' as const;

function MobX() {
  console.log(`Render ${TITLE} App`);

  const counter = useSelector((state: State) => state.counter);
  const headerSubtitle = useSelector((state: State) => state.header.subtitle);
  const headerContent = useSelector((state: State) => state.header.content);

  return (
    <>
      <AppBar position="static" className="header">
        <Toolbar>
          <DrawerButton />
          <h2 className="header-title">
            {TITLE}
            <span className="header-subtitle">{headerSubtitle}</span>
          </h2>
          {headerContent}
        </Toolbar>
      </AppBar>

      <main>
        <Heading title={TITLE} icon={MobXLogo} iconColor="#EA6618" iconLink="https://mobx.js.org/" />

        <PageFlow>
          <span>{counter}</span>
        </PageFlow>

        <PageRoutes page={{ 1: <Page1 />, 2: <Page2 />, 3: <Page3 /> }} />
      </main>
    </>
  );
}

function MobXApp() {
  return (
    <Provider store={store}>
      <MobX />
    </Provider>
  );
}

export default MobXApp;
