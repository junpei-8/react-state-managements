import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/App';

// React.StrictMode を用いると、デバッグのために２回レンダリングが発生してしまう
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>
);
