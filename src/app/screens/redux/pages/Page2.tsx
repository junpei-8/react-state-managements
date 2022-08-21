import { Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { printLine } from '@/utils';
import { counterAction, headerAction, Dispatch } from '../store/actions';

function Page2() {
  console.log('Render Page 2');
  printLine('magenta');

  // ローカルのカウンターの状態とセッターを作成
  const [count, setCount] = useState(0);

  // ローカルのカウンターをインクリメントする
  const incrementCount = () => setCount((state) => state + 1);

  // 共通の状態を更新するために必要な関数を取得
  const dispatch = useDispatch<Dispatch>();

  // 共通のカウンターをインクリメントする
  const incrementGlobalCount = () => dispatch(counterAction.increment());

  // ヘッダーにボタンを描画する
  const attachHeaderContent = () =>
    dispatch(headerAction.attachContent(<Button onClick={incrementCount}>Increment local count</Button>));

  // ヘッダーからボタンを削除する
  const detachHeaderContent = () => dispatch(headerAction.detachContent());

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
