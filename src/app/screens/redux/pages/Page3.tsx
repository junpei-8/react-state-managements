import { Button, Divider, Switch } from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { printLine } from '@/utils';
import { counterAction, headerAction, Dispatch } from '../store/actions';
import { State } from '../store/reducers';

function Page3() {
  console.log('Render Page 3');
  printLine('yellow');

  // ローカルのスイッチの状態とセッターを生成
  const [switchState, setSwitchState] = useState(false);

  // ローカルのスイッチの状態を切り替える
  const toggleSwitch = () => setSwitchState((state) => !state);

  // 共通の状態を更新するために必要な関数を取得
  const dispatch = useDispatch<Dispatch>();

  // 共通のカウンターをインクリメントする
  const incrementGlobalCount = () => dispatch(counterAction.increment());

  // ヘッダーのコンテンツの状態を取得
  const headerContent = useSelector((state: State) => state.header.content);

  // ヘッダーにスイッチを描画する
  const attachHeaderContent = () =>
    dispatch(headerAction.attachContent(<Switch checked={switchState} onChange={toggleSwitch} />));

  // ヘッダーからスイッチを削除する
  const detachHeaderContent = () => dispatch(headerAction.detachContent());

  // "switchState"状態の変更があった場合、再度アタッチすることで、その変更を伝えることが可能だが、
  // その際に不要なレンダリングが増えてしまうので注意
  useLayoutEffect(() => {
    if (headerContent) {
      attachHeaderContent();
    }
  }, [switchState]);

  // アンマウント時に発火し、ヘッダーからスイッチを削除する
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
