import { Button, Divider } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { printLine, getRandomString } from '@/utils';
import { counterAction, headerAction, Dispatch } from '../store/actions';

function Page1() {
  console.log('Render Page 1');
  printLine('cyan');

  // ローカルのカウンターの状態とセッターを作成
  const [count, setCount] = useState(0);

  // ローカルのカウンターをインクリメントする
  const incrementCount = () => setCount((state) => state + 1);

  // 共通の状態を更新するために必要な関数を取得
  const dispatch = useDispatch<Dispatch>();

  // 共通のカウンターをインクリメントする
  const incrementGlobalCount = () => dispatch(counterAction.increment());

  // ヘッダーにサブタイトルを表示する
  const setHeaderSubtitle = () => dispatch(headerAction.setSubtitle(getRandomString()));

  // ヘッダーからサブタイトルを削除する
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
        <Button onClick={incrementCount}>Count</Button>
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
