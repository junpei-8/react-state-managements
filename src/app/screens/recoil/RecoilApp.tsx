import { AppBar, Toolbar } from '@mui/material';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { DrawerButton } from '@/DrawerButton';
import { ReactComponent as RecoilLogo } from '@/assets/recoil.svg';
import Heading from '@/components/Heading';
import PageFlow from '@/components/PageFlow';
import PageRoutes from '@/components/PageRoutes';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import { counterState } from './states/counter';
import { headerFormattedSubtitle, headerState, headerSubtitleState } from './states/header';

const TITLE = 'Recoil' as const;

function Recoil() {
  console.log(`Render ${TITLE} App`);

  const counter = useRecoilValue(counterState);
  const header = useRecoilValue(headerState);
  const headerSubtitle = useRecoilValue(headerFormattedSubtitle);

  return (
    <>
      <AppBar position="static" className="header">
        <Toolbar>
          <DrawerButton />
          <h2 className="header-title">
            {TITLE}
            <span className="header-subtitle">{headerSubtitle}</span>
          </h2>
          {header.content}
        </Toolbar>
      </AppBar>

      <main>
        <Heading title={TITLE} icon={RecoilLogo} iconColor="rgba(255, 255, 255, 0.6)" iconLink="https://mobx.js.org/" />

        <PageFlow>
          <span>{counter}</span>
        </PageFlow>

        <PageRoutes page={{ 1: <Page1 />, 2: <Page2 />, 3: <Page3 /> }} />
      </main>
    </>
  );
}

function RecoilApp() {
  return (
    <RecoilRoot>
      <Recoil />
    </RecoilRoot>
  );
}

export default RecoilApp;
