import { Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { printLine } from '@/utils';
import { useCounterStore, useHeaderStore } from '../store';

function Page2() {
  console.log('Render Page 2');
  printLine('magenta');

  // ローカルのカウンターの状態とセッターを作成
  const [count, setCount] = useState(0);

  // ローカルのカウンターをインクリメントする
  const incrementCount = () => setCount((state) => state + 1);

  // 共通のカウンターの状態を取得
  const globalCounter = useCounterStore();

  // 共通のカウンターをインクリメントする
  const incrementGlobalCount = () => globalCounter.increment();

  // ヘッダーの状態を取得
  const headerState = useHeaderStore();

  // ヘッダーにボタンを描画する
  const attachHeaderContent = () =>
    headerState.attachContent(<Button onClick={incrementCount}>Increment local count</Button>);

  // ヘッダーからボタンを削除する
  const detachHeaderContent = () => headerState.detachContent();

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
