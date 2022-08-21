import { CircularProgress } from '@mui/material';
import style from './Loading.module.scss';

function Loading() {
  return (
    <div className={style.host}>
      <CircularProgress className={style.progress} size={160} />
    </div>
  );
}

export default Loading;
