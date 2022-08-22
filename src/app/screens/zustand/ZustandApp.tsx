import { AppBar, Toolbar } from '@mui/material';
import { DrawerButton } from '@/DrawerButton';
import { ReactComponent as ZustandLogo } from '@/assets/zustand';
import Heading from '@/components/Heading';
import PageFlow from '@/components/PageFlow';
import PageRoutes from '@/components/PageRoutes';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import { useCounterStore, useHeaderStore } from './store';

const TITLE = 'Zustand' as const;

function Zustand() {
  console.log(`Render ${TITLE} App`);

  const counter = useCounterStore(); // 状態を抽出せずに取得できる
  const headerSubtitle = useHeaderStore((state) => state.computed.formattedSubtitle);
  const headerContent = useHeaderStore((state) => state.content);

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
        <Heading title={TITLE} icon={ZustandLogo} iconColor="#4caf50" iconLink="https://zustand-demo.pmnd.rs/" />

        <PageFlow>
          <span>{counter.value}</span>
        </PageFlow>

        <PageRoutes page={{ 1: <Page1 />, 2: <Page2 />, 3: <Page3 /> }} />
      </main>
    </>
  );
}

function ZustandApp() {
  return <Zustand />;
}

export default ZustandApp;
