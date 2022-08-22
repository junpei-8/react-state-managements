import { AppBar, Toolbar } from '@mui/material';
import { DrawerButton } from '@/DrawerButton';
import { ReactComponent as ValtioLogo } from '@/assets/valtio';
import Heading from '@/components/Heading';
import PageFlow from '@/components/PageFlow';
import PageRoutes from '@/components/PageRoutes';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import { counterState, headerState } from './states';
import { useSnapshot } from 'valtio';

const TITLE = 'Valtio' as const;

function Valtio() {
  console.log(`Render ${TITLE} App`);

  const counter = useSnapshot(counterState);
  const header = useSnapshot(headerState);

  return (
    <>
      <AppBar position="static" className="header">
        <Toolbar>
          <DrawerButton />
          <h2 className="header-title">
            {TITLE}
            <span className="header-subtitle">{header.subtitle}</span>
          </h2>
          {header.clonedContent}
        </Toolbar>
      </AppBar>

      <main>
        <Heading title={TITLE} icon={ValtioLogo} iconColor="#9ee8ef" iconLink="https://github.com/pmndrs/valtio" />

        <PageFlow>
          <span>{counter.value}</span>
        </PageFlow>

        <PageRoutes page={{ 1: <Page1 />, 2: <Page2 />, 3: <Page3 /> }} />
      </main>
    </>
  );
}

function ValtioApp() {
  return <Valtio />;
}

export default ValtioApp;
