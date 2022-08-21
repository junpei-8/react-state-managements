import { Button, Divider } from '@mui/material';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { printLine, getRandomString } from '@/utils';
import { counterState } from '../states/counter';
import { headerState } from '../states/header';

function Page2() {
  console.log('Render Page 1');
  printLine('cyan');

  // ローカルのカウンターの状態を作成
  const [count, setCount] = useState(0);

  // ローカルのカウンターをインクリメントする
  const incrementLocalCount = () => setCount((state) => state + 1);

  // グローバルなカウンターの状態を更新するセッターを取得
  const setGlobalCount = useSetRecoilState(counterState);

  // グローバルなカウンターをインクリメントする
  const incrementGlobalCount = () => setGlobalCount((state) => state + 1);

  // ヘッダーの状態を更新するセッターを取得
  const setHeaderState = useSetRecoilState(headerState);

  // ヘッダーにサブタイトルを表示する
  const setHeaderSubtitle = () => setHeaderState((state) => ({ ...state, subtitle: getRandomString() }));

  // ヘッダーからサブタイトルを削除する
  const unsetHeaderSubtitle = () => setHeaderState((state) => ({ ...state, subtitle: '' }));

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

export default Page2;
