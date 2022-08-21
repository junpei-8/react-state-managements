import { Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { printLine } from '@/utils';
import { Dispatch } from '../store';
import { counterSlice } from '../store/counter';
import { headerSlice } from '../store/header';

function Page1() {
  console.log('Render Page 1');
  printLine('cyan');

  const dispatch = useDispatch<Dispatch>();

  const [count, setCount] = useState(0);

  // グローバルなカウンターをインクリメントする
  const incrementGlobalCount = () => dispatch(counterSlice.actions.increment());

  // ローカルのカウンターをインクリメントする
  const incrementLocalCount = () => setCount((state) => state + 1);

  // ヘッダーにボタンを描画する
  const attachHeaderContent = () =>
    dispatch(headerSlice.actions.attachContent(<Button onClick={incrementLocalCount}>Increment local count</Button>));

  // ヘッダーからボタンを削除する
  const detachHeaderContent = () => dispatch(headerSlice.actions.detachContent());

  // アンマウント時に呼ばれ、ヘッダーからボタンを削除する
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
        <Button onClick={incrementLocalCount}>Count</Button>
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

export default Page1;
