import { DefaultComponentProps } from '@mui/material/OverridableComponent';
import { ReactComponent as ViteIcon } from '@/assets/vite.svg';
import style from './Heading.module.scss';

interface Props {
  title: string;
  icon: React.FunctionComponent<DefaultComponentProps<any>>;
  iconLink: string;
  iconColor: string;
}

function Heading({ title, icon: Icon, iconLink, iconColor }: Props) {
  return (
    <div className={style.host}>
      <div>
        <a className={style.logoLink} href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src="/react.svg" className={style.reactLogo} alt="React logo" />
        </a>

        <a className={style.iconLink} href={iconLink} target="_blank" rel="noreferrer">
          <Icon style={{ color: iconColor }} />
        </a>

        <a className={style.logoLink} href="https://vitejs.dev" target="_blank" rel="noreferrer" title="Vite link">
          <ViteIcon className={style.reactLogo} aria-label="Vite logo" />
        </a>
      </div>

      <h1 className={style.heading}>{title}</h1>
    </div>
  );
}

export default Heading;
