import { Button, Divider, TextField } from '@mui/material';
import { FormEvent, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '../store/actions';
import { INCREMENT_COUNT } from '../store/actions/counter';
import { ATTACH_HEADER_CONTENT, DETACH_HEADER_CONTENT } from '../store/actions/header';
import { State } from '../store/reducers';

function Page3() {
  console.log('Render Page 3');
  console.log(`\u001b[36m${'-'.repeat(16)}\u001b[0m`);

  const dispatch = useDispatch<Dispatch>();

  const headerContent = useSelector<State, State['header']['content']>((state) => state.header.content);

  const [text, setText] = useState('');

  // グローバルなカウンターをインクリメントする
  const incrementGlobalCount = () => dispatch({ type: INCREMENT_COUNT });

  // テキストフィールドに変更があった場合に発火する
  const onChangeTextField = ({ target }: FormEvent) => setText((target as HTMLInputElement).value);

  // ヘッダーにテキストフィールドを描画する
  const attachHeaderContent = () =>
    dispatch({
      type: ATTACH_HEADER_CONTENT,
      content: <TextField label="Text field" variant="filled" value={text} onInput={onChangeTextField} />,
    });

  // "text"状態に変更があった場合、再度アタッチすることで、その変更を伝えることが可能
  // ただし、不要なレンダリングが増えてしまう
  useLayoutEffect(() => {
    if (headerContent) {
      attachHeaderContent();
    }
  }, [text]);

  // ヘッダーにあるテキストフィールドを削除する
  const detachHeaderContent = () => dispatch({ type: DETACH_HEADER_CONTENT });

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

export default Page3;
