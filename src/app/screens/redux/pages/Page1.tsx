import { Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { printLine } from '@/utils';
import { Dispatch } from '../store/actions';
import { INCREMENT_COUNT } from '../store/actions/counter';
import { ATTACH_HEADER_CONTENT, DETACH_HEADER_CONTENT } from '../store/actions/header';

function Page1() {
  console.log('Render Page 1');
  printLine('cyan');

  const dispatch = useDispatch<Dispatch>();

  const [count, setCount] = useState(0);

  // グローバルなカウンターをインクリメントする
  const incrementGlobalCount = () => dispatch({ type: INCREMENT_COUNT });

  // ローカルのカウンターをインクリメントする
  const incrementLocalCount = () => setCount((state) => state + 1);

  // ヘッダーにボタンを描画する
  const attachHeaderContent = () =>
    dispatch({
      type: ATTACH_HEADER_CONTENT,
      content: <Button onClick={incrementLocalCount}>Increment local count</Button>,
    });

  // ヘッダーからボタンを削除する
  const detachHeaderContent = () => dispatch({ type: DETACH_HEADER_CONTENT });

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
