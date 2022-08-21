import { Navigate, Route, Routes } from 'react-router-dom';
import { getPageRoute, PAGE_KEYS } from './page';

interface Props {
  page: {
    [key in typeof PAGE_KEYS[number]]: JSX.Element;
  };
}

function PageRoutes({ page }: Props) {
  return (
    <Routes>
      {PAGE_KEYS.map((key) => (
        <Route key={key} path={`/${getPageRoute(key)}`} element={page[key]} />
      ))}
      {/* <Route path="/" element={<Navigate to={`${getPageRoute(PAGE_KEYS[0])}`} replace />} /> */}
    </Routes>
  );
}

export default PageRoutes;
