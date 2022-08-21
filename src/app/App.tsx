import { createTheme, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Drawer, { DrawerProvider } from './Drawer';
import Loading from './Loading';
import { routes } from './router';
import { printLine } from './utils';

function App() {
  printLine('green');
  console.log('Render App');

  return (
    <div className="App">
      <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
        <Router>
          <DrawerProvider>
            <Suspense fallback={<Loading />}>
              <Routes>
                {routes.map((route) => (
                  <Route path={`${route.path}/*`} key={route.path} element={<route.component />} />
                ))}
                <Route path="/" element={<Navigate to="/home" replace />} />
              </Routes>
            </Suspense>
            <Drawer />
          </DrawerProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
