// ! textarea をヘッダーに描画するバージョン
// ! switch とどっちを取るか迷ったが、見栄え的とわかりやすさ的に switch を取った

import { Button, Divider, TextField } from '@mui/material';
import { FormEvent, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { printLine } from '@/utils';
import { counterAction, Dispatch, headerAction } from '../store/actions';
import { State } from '../store/reducers';

function Page4() {
  console.log('Render Page 3');
  printLine('yellow');

  const dispatch = useDispatch<Dispatch>();

  const headerContent = useSelector((state: State) => state.header.content);

  const [text, setText] = useState('');

  // グローバルなカウンターをインクリメントする
  const incrementGlobalCount = () => dispatch(counterAction.increment());

  // テキストフィールドに変更があった場合に発火する
  const onChangeTextField = ({ target }: FormEvent) => setText((target as HTMLInputElement).value);

  // ヘッダーにテキストフィールドを描画する
  const attachHeaderContent = () =>
    dispatch(
      headerAction.attachContent(
        <TextField label="Text field" variant="filled" value={text} onInput={onChangeTextField} />,
      ),
    );

  // "text"状態に変更があった場合、再度アタッチすることで、その変更を伝えることが可能
  // ただし、不要なレンダリングが増えてしまう
  useLayoutEffect(() => {
    if (headerContent) {
      attachHeaderContent();
    }
  }, [text]);

  // ヘッダーにあるテキストフィールドを削除する
  const detachHeaderContent = () => dispatch(headerAction.detachContent());

  // アンマウント時に呼ばれ、テキストフィールドを削除する
  useEffect(() => detachHeaderContent as any, []);

  return (
    <div className="page">
      <div className="page-section">
        <h3 className="page-section-title">Global Counter</h3>
        <Button onClick={incrementGlobalCount}>Count</Button>
      </div>

      <Divider></Divider>

      <div className="page-section">
        <h3 className="page-section-title">Local textfield</h3>
        <TextField
          className="page-section-content"
          autoComplete="false"
          label="Text field"
          variant="outlined"
          value={text}
          onInput={onChangeTextField}
        />
      </div>

      <Divider></Divider>

      <div className="page-section">
        <h3 className="page-section-title">Attach Header Content</h3>
        <Button onClick={attachHeaderContent}>Attach textfield</Button>
        <Button onClick={detachHeaderContent}>Detach textfield</Button>
      </div>
    </div>
  );
}

export default Page4;
