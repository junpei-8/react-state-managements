import { Card, CardActionArea, CardContent, Divider } from '@mui/material';
import { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './PageFlow.module.scss';
import { getPageRoute, PAGE_KEYS } from './page';

function PageFlow({ children }: PropsWithChildren) {
  const location = useLocation();

  const getActiveClass = () => {
    const pathname = location.pathname;

    const key = PAGE_KEYS.find((key) => pathname.includes(getPageRoute(key)));

    return style[`active${key || 0}`];
  };

  return (
    <div className={`${style.host} ${getActiveClass()}`}>
      <Link to="" className={style.parent}>
        <Card>
          <CardActionArea component="div">
            <CardContent>
              <span>Global Count</span>
              <Divider className={style.counterDivider} />
              <span>{children}</span>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>

      {PAGE_KEYS.map((key) => (
        <Link key={key} to={getPageRoute(key)} className={style[`child${key}`]}>
          <Card>
            <CardActionArea component="div">
              <CardContent>
                <span>Page {key}</span>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}

      <div className={style.lineBoxContainer}>
        <div className={style.lineBox1}></div>
        <div className={style.lineBox2}></div>
      </div>
    </div>
  );
}

export default PageFlow;
