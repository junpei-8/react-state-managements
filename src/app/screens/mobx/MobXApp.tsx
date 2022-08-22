import { AppBar, Toolbar } from '@mui/material';
import { observer, Observer, useLocalObservable, useObserver } from 'mobx-react';
import { DrawerButton } from '@/DrawerButton';
import { ReactComponent as MobXLogo } from '@/assets/mobx.svg';
import Heading from '@/components/Heading';
import PageFlow from '@/components/PageFlow';
import PageRoutes from '@/components/PageRoutes';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import { StoreProvider, useStore } from './stores';

const TITLE = 'MobX' as const;

function MobX() {
  console.log(`Render ${TITLE} App`);
  const store = useStore();

  const onclick = () => {
    console.log('click', store.header);
    store.header.setRandomSubtitle();
    store.counter.count++;
  };

  return (
    <Observer>
      {() => (
        <>
          <AppBar position="static" className="header">
            <Toolbar>
              <DrawerButton />
              <h2 className="header-title" onClick={onclick}>
                {TITLE}
                <span className="header-subtitle">{store.header.formattedSubtitle}</span>
              </h2>
              {store.header.content}
            </Toolbar>
          </AppBar>

          <main>
            <Heading title={TITLE} icon={MobXLogo} iconColor="#EA6618" iconLink="https://mobx.js.org/" />

            <PageFlow>
              <span>{store.counter.count}</span>
            </PageFlow>

            <PageRoutes page={{ 1: <Page1 />, 2: <Page2 />, 3: <Page3 /> }} />
          </main>
        </>
      )}
    </Observer>
  );
}

function MobXApp() {
  return (
    <StoreProvider>
      <MobX />
    </StoreProvider>
  );
}

export default MobXApp;
