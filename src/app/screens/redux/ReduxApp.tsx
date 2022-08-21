import { AppBar, Toolbar } from '@mui/material';
import { Provider, useSelector } from 'react-redux';
import { DrawerButton } from '@/DrawerButton';
import { ReactComponent as ReduxLogo } from '@/assets/redux.svg';
import Heading from '@/components/Heading';
import PageFlow from '@/components/PageFlow';
import PageRoutes from '@/components/PageRoutes';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import store from './store';
import { State } from './store/reducers';

const TITLE = 'Redux' as const;

function Redux() {
  console.log('Render Redux App');

  const counter = useSelector<State, State['counter']>((state) => state.counter);
  const headerContent = useSelector<State, State['header']['content']>((state) => state.header.content);

  return (
    <>
      <AppBar position="static" className="header">
        <Toolbar>
          <DrawerButton />
          <h2 className="header-heading">{TITLE}</h2>
          {headerContent}
        </Toolbar>
      </AppBar>

      <main>
        <Heading
          title={TITLE}
          icon={ReduxLogo}
          iconColor="#764ABC"
          iconLink="https://react-redux.js.org/introduction/getting-started"
        />

        <PageFlow>
          <span>{counter}</span>
        </PageFlow>

        <PageRoutes page={{ 1: <Page1 />, 2: <Page2 />, 3: <Page3 /> }} />
      </main>
    </>
  );
}

function ReduxApp() {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
}

export default ReduxApp;