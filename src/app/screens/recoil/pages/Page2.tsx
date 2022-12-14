import { Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { printLine } from '@/utils';
import { counterState, headerState } from '../states';

function Page2() {
  console.log('Render Page 2');
  printLine('magenta');

  // ローカルのカウンターの状態とセッターを作成
  const [count, setCount] = useState(0);

  // ローカルのカウンターをインクリメントする
  const incrementCount = () => setCount((state) => state + 1);

  // 共通のカウンターの状態を更新するセッターを取得
  const setGlobalCount = useSetRecoilState(counterState);

  // 共通のカウンターをインクリメントする
  const incrementGlobalCount = () => setGlobalCount((state) => state + 1);

  // ヘッダーの状態を更新するセッターを取得
  const setHeaderState = useSetRecoilState(headerState);

  // ヘッダーにボタンを描画する
  const attachHeaderContent = () =>
    setHeaderState((state) => ({
      ...state,
      content: <Button onClick={incrementCount}>Increment local count</Button>,
    }));

  // ヘッダーからボタンを削除する
  const detachHeaderContent = () => setHeaderState((state) => ({ ...state, content: null }));

  // アンマウント時に発火し、ヘッダーからボタンを削除する
  useEffect(() => detachHeaderContent as any, []);

  return (
    <div className="page">
      <div className="page-section">
        <h3 className="page-section-title">Global Counter</h3>
        <Button onClick={incrementGlobalCount}>Count</Button>
      </div>

      <Divider></Divider>

      <div className="page-section">
        <h3 className="page-section-title">Local Counter</h3>
        <span className="page-section-label">{count}</span>
        <Button onClick={incrementCount}>Count</Button>
      </div>

      <Divider></Divider>

      <div className="page-section">
        <h3 className="page-section-title">Attach Header Content</h3>
        <Button onClick={attachHeaderContent}>Attach button</Button>
        <Button onClick={detachHeaderContent}>Detach button</Button>
      </div>
    </div>
  );
}

export default Page2;
