import { Button, Divider, Switch } from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { printLine } from '@/utils';
import { counterAction, headerAction, Dispatch, State } from '../store';

function Page3() {
  console.log('Render Page 3');
  printLine('yellow');

  const [switchState, setSwitchState] = useState(false);

  const dispatch = useDispatch<Dispatch>();

  const headerContent = useSelector((state: State) => state.header.content);

  // グローバルなカウンターをインクリメントする
  const incrementGlobalCount = () => dispatch(counterAction.increment());

  // ローカルのカウンターをインクリメントする
  const toggleSwitch = () => setSwitchState((state) => !state);

  // ヘッダーにスイッチを描画する
  const attachHeaderContent = () =>
    dispatch(headerAction.attachContent(<Switch checked={switchState} onChange={toggleSwitch} />));

  // "switchState"状態の変更があった場合、再度アタッチすることで、その変更を伝えることが可能
  // ただし、不要なレンダリングが増えてしまう
  useLayoutEffect(() => {
    if (headerContent) {
      attachHeaderContent();
    }
  }, [switchState]);

  // ヘッダーからスイッチを削除する
  const detachHeaderContent = () => dispatch(headerAction.detachContent());

  // アンマウント時に呼ばれ、ヘッダーからスイッチを削除する
  useEffect(() => detachHeaderContent as any, []);

  return (
    <div className="page">
      <div className="page-section">
        <h3 className="page-section-title">Global Counter</h3>
        <Button onClick={incrementGlobalCount}>Count</Button>
      </div>

      <Divider></Divider>

      <div className="page-section">
        <h3 className="page-section-title">Local Switch</h3>
        <span className="page-section-label">{`${switchState}`}</span>
        <Switch checked={switchState} onChange={toggleSwitch} />
      </div>

      <Divider></Divider>

      <div className="page-section">
        <h3 className="page-section-title">Attach Header Content</h3>
        <Button onClick={attachHeaderContent}>Attach switch</Button>
        <Button onClick={detachHeaderContent}>Detach switch</Button>
      </div>
    </div>
  );
}

export default Page3;
