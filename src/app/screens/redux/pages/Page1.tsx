import { Button, Divider } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { printLine, getRandomString } from '@/utils';
import { Dispatch, counterAction, headerAction } from '../store/actions';

function Page1() {
  console.log('Render Page 1');
  printLine('cyan');

  const dispatch = useDispatch<Dispatch>();

  const [count, setCount] = useState(0);

  // グローバルなカウンターをインクリメントする
  const incrementGlobalCount = () => dispatch(counterAction.increment());

  // ローカルのカウンターをインクリメントする
  const incrementLocalCount = () => setCount((state) => state + 1);

  // ヘッダーにボタンを描画する
  const setHeaderSubtitle = () => dispatch(headerAction.setSubtitle(getRandomString()));

  // ヘッダーからボタンを削除する
  const unsetHeaderSubtitle = () => dispatch(headerAction.unsetSubtitle());

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
        <h3 className="page-section-title">Set Header Subtitle</h3>
        <Button onClick={setHeaderSubtitle}>Set random subtitle</Button>
        <Button onClick={unsetHeaderSubtitle}>Unset subtitle</Button>
      </div>
    </div>
  );
}

export default Page1;
